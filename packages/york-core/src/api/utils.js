export function NetworkError(response) {
  const { method, url, status, message, data } = response || {}

  this.name = 'NetworkError'
  this.message = message || status || null

  this.request = {
    method,
    url,
    status: status || null,
    data: data || null,
  }

  this.stack = new Error().stack
}

NetworkError.prototype = Object.create(Error.prototype)

export const getResponseBody = async response => {
  const contentType = response.headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    const json = await response.json()
    return json
  }
  return response.text()
}
