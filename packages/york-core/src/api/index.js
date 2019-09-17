/**
 * Fake get access token.
 */
const getNewAccessToken = () => new Promise(resolve => resolve('xyz'))

/**
 * Important
 */
let isRefreshingToken = false
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
  isRefreshingToken = false

  subscribers.forEach(subscriber => {
    subscriber(error, data)
  })

  subscribers = []
}

const refreshAccessToken = () => {
  if (isRefreshingToken) {
    // If a request is creating new access token
    return new Promise((resolve, reject) => {
      const subscriber = (error, accessToken) =>
        error ? reject(error) : resolve(accessToken)

      subscribe(subscriber)
    })
  }

  isRefreshingToken = true

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
/**
 * End Important
 */

/**
 * Connect to API
 */
export const makeRequest = (...args) => {
  const retryRequestIfExpired = request =>
    request.then(response => {
      if (response.status === 404) {
        return refreshAccessToken().then(newAccessToken => {
          const newArgs = [
            args[0].replace('null', '1'),
            // args[0],
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

const getResponseBody = async response => {
  const contentType = response.headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    const json = await response.json()
    return json
  }
  return response.text()
}

const request = async (method, url, payload, config = {}) => {
  const fetchConfig = {
    method,
    headers: {
      'content-type': 'application/json',
    },
    body: payload ? JSON.stringify(payload) : null,
  }
  const { req } = config
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${url}`

  // const originalRequest = () => fetch(fullUrl, fetchConfig);
  // const response = await originalRequest();
  const response = await makeRequest(fullUrl, fetchConfig)

  if (response.ok) return getResponseBody(response)

  // onReject({ response }, originalRequest);

  console.log('Error occured', response)
}

const api = {
  get: (url, config) => request('GET', url, null, config),
  put: (...args) => request('PUT', ...args),
  patch: (...args) => request('PATCH', ...args),
  post: (...args) => request('POST', ...args),
  delete: (...args) => request('DELETE', ...args),
}

export default api
