export function NetworkError(response) {
  const { method, url, status, message, data } = response || {}

  this.name = 'NetworkError'
  this.message = message || status || null

  /*
   * Этот запрос будет отличаться от того, что будет записано в error.url, error.status и т.д. если
   * он выполяется на сервере. В таком случае в тело ошибки попадет запрос который делал пользователь
   * к экспрессу (его допишет миддливар Senyry), а в this.request запишется запрос который выполнял
   * сервер чтобы собрать страницу для пользователя и на котором собственно и возникла ошибка.
   */
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
