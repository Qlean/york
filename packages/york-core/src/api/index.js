import { NetworkError, getResponseBody } from './utils'

let isRefreshing = false
let failedQueue = []

const subscribe = request =>
  new Promise((resolve, reject) => {
    failedQueue.push({ resolve, reject })
  })
    .then(token => request(token))
    .catch(err => Promise.reject(err))

const processQueue = (error, token = null) => {
  isRefreshing = false
  failedQueue.forEach(({ reject, resolve }) => {
    if (error) reject(error)
    else resolve(token)
  })
  failedQueue = []
}

const api = ({
  baseUrl,
  ssoUrl,
  getRefreshToken,
  getAccessToken,
  onRefresh,
  requestDataTransformer,
  responseDataTransformer,
}) => {
  const refreshToken = getRefreshToken()
  const accessToken = getAccessToken()

  const getNewAccessToken = oldRefreshToken =>
    fetch(`${ssoUrl}${oldRefreshToken}`)
      .then(data => data.json())
      .then(
        ({ refreshToken: newRefreshToken, accessToken: newAccessToken }) => {
          onRefresh({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          })
          return { refreshToken: newRefreshToken, accessToken: newAccessToken }
        },
      )

  const request = async (method, url, payload, config) => {
    const fetchConfig = {
      method,
      body: payload
        ? JSON.stringify(
            requestDataTransformer ? requestDataTransformer(payload) : payload,
          )
        : null,
      headers: {
        'content-type': 'application/json',
        ...config.headers,
      },
      ...config,
    }

    const originalRequest = token =>
      fetch(`${baseUrl}${url}`, {
        ...fetchConfig,
        headers: { ...fetchConfig.headers, Authorization: token },
      })

    if (isRefreshing) return subscribe(originalRequest)

    const response = await originalRequest(accessToken).then(res => {
      if (res.status === 419) {
        if (isRefreshing) return subscribe(originalRequest)

        isRefreshing = true
        return getNewAccessToken(refreshToken)
          .then(async ({ accessToken: newAccessToken }) => {
            /**
             * FIXME: Очень узкое место. Ждем, пока выполнится первый запрос, чтобы после этого
             * выполнить всю очередь. По каким-то причинам очередь не успевает заполнятся полностью,
             * если так не сделать.
             */
            await originalRequest(newAccessToken)
            return newAccessToken
          })
          .then(newAccessToken => {
            processQueue(null, newAccessToken)
          })
      }

      return res
    })

    if (response.ok) return getResponseBody(response, responseDataTransformer)
    throw new NetworkError(response, responseDataTransformer)
  }

  return {
    get: (url, config) => request('GET', url, null, config),
    put: (...args) => request('PUT', ...args),
    patch: (...args) => request('PATCH', ...args),
    post: (...args) => request('POST', ...args),
    delete: (...args) => request('DELETE', ...args),
  }
}

export default api
