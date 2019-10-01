export function NetworkError(response, responseDataTransformer) {
  const { method, url, status, message, data } = response || {}

  this.name = 'NetworkError'
  this.message = message || status || null

  this.request = {
    method,
    url,
    status: status || null,
    data:
      (responseDataTransformer ? responseDataTransformer(data) : data) || null,
  }

  this.stack = new Error().stack
}

NetworkError.prototype = Object.create(Error.prototype)

export const getResponseBody = async (response, responseDataTransformer) => {
  const contentType = response.headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    const json = await response.json()
    return responseDataTransformer ? responseDataTransformer(json) : json
  }
  return response.text()
}

export const parseJwt = (token = '') => {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(char => {
          return `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`
        })
        .join(''),
    )

    return JSON.parse(jsonPayload)
  } catch {
    return {}
  }
}
