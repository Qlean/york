import { NetworkError, getResponseBody } from './utils'

const getNewAccessToken = () => new Promise(resolve => resolve('xyz'))

let isRefreshing = false
let subscribers = []

const subscribe = subscriber => {
  if (
    typeof subscriber !== 'function' ||
    subscribers.indexOf(subscriber) !== -1
  )
    return false

  subscribers.push(subscriber)
}

const broadcast = (error = null, data) => {
  isRefreshing = false

  subscribers.forEach(subscriber => {
    subscriber(error, data)
  })

  subscribers = []
}

const refreshAccessToken = () => {
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      const subscriber = (error, accessToken) =>
        error ? reject(error) : resolve(accessToken)

      subscribe(subscriber)
    })
  }

  isRefreshing = true

  return getNewAccessToken()
    .then(accessToken => {
      broadcast(null, accessToken)
      return accessToken
    })
    .catch(error => {
      broadcast(error)
      throw error
    })
}

export const makeRequest = (...args) => {
  const retryRequestIfExpired = request =>
    request.then(response => {
      if (response.status === 401) {
        return refreshAccessToken().then(newAccessToken => {
          const newArgs = [
            args[0],
            {
              ...args[1],
              headers: {
                ...(args[1] || {}).headers,
                Authorization: newAccessToken,
              },
            },
          ]
          return makeRequest(...newArgs)
        })
      }
      return response
    })

  const req = fetch(...args)

  return retryRequestIfExpired(req)
}

const request = async (method, url, payload, config = {}) => {
  const fetchConfig = {
    method,
    headers: {
      'content-type': 'application/json',
    },
    body: payload ? JSON.stringify(payload) : null,
    ...config,
  }
  const { req } = config
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${url}`

  const response = await makeRequest(fullUrl, fetchConfig)

  if (response.ok) return getResponseBody(response)

  throw new NetworkError(response)
}

const api = {
  get: (url, config) => request('GET', url, null, config),
  put: (...args) => request('PUT', ...args),
  patch: (...args) => request('PATCH', ...args),
  post: (...args) => request('POST', ...args),
  delete: (...args) => request('DELETE', ...args),
}

export default api
