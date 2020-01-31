type NetworkErrorResponse = {
  method?: string
  url?: string
  status?: number
  statusText?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NetworkErrorData = any

export type NetworkError = Error & {
  name: 'NetworkError'
  statusText: string | null
  status: number | null
  data: NetworkErrorData | null
  request: {
    method?: string
    url?: string
  }
  stack?: string
}

export const NetworkError = (function NetworkError(
  this: NetworkError,
  response: NetworkErrorResponse,
  data?: NetworkErrorData,
): void {
  const { method, url, status, statusText } = response || {}

  this.name = 'NetworkError'
  this.statusText = statusText || null
  this.status = status || null
  this.data = data || null

  this.request = {
    method,
    url,
  }

  this.stack = new Error().stack
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any) as {
  new (response: NetworkErrorResponse, data: NetworkErrorData): NetworkError
}

NetworkError.prototype = Object.create(Error.prototype)

export const getResponseBody = async <T>(
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseDataTransformer?: (data: any) => T,
): Promise<T> => {
  const contentType = response.headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    const json = await response.json()
    return responseDataTransformer ? responseDataTransformer(json) : (json as T)
  }
  return (response.text() as unknown) as T
}
