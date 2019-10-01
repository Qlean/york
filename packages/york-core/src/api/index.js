import { NetworkError, getResponseBody } from './utils'

let isTokenRefreshing = false
let failedRequests = []

const pushToFailedRequests = request =>
  new Promise((resolve, reject) => {
    failedRequests.push({ resolve, reject })
  })
    .then(token => request(token))
    .catch(error => Promise.reject(error))

const processQueue = (error, token = null) => {
  isTokenRefreshing = false
  failedRequests.forEach(({ reject, resolve }) => {
    if (error) reject(error)
    else resolve(token)
  })
  failedRequests = []
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
  const originalRefreshToken = getRefreshToken()
  const originalAccessToken = getAccessToken()

  const getNewAccessToken = oldRefreshToken =>
    fetch(`${ssoUrl}${oldRefreshToken}`)
      .then(data => data.json())
      .then(({ refreshToken, accessToken }) => {
        onRefresh({
          accessToken,
          refreshToken,
        })
        return { refreshToken, accessToken }
      })

  const request = async (method, url, payload, config = {}) => {
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

    if (isTokenRefreshing) return pushToFailedRequests(originalRequest)

    const response = await originalRequest(originalAccessToken).then(res => {
      if (res.status === 419) {
        if (isTokenRefreshing) return pushToFailedRequests(originalRequest)

        isTokenRefreshing = true
        return getNewAccessToken(originalRefreshToken).then(
          async ({ accessToken }) => {
            /**
             * FIXME: Очень узкое место. Ждем, пока выполнится первый запрос, чтобы после этого
             * выполнить всю очередь. По каким-то причинам очередь не успевает заполнятся полностью,
             * если так не сделать.
             */
            const newResponse = await originalRequest(accessToken)
            processQueue(null, accessToken)
            return newResponse
          },
        )
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
