import { NetworkError, getResponseBody } from './utils'

export * from './utils'

type FailedRequest = {
  resolve: (token: string) => void
  reject: (error: Error) => void
}

type AuthTokens = {
  refreshToken: string
  accessToken: string
}

type RequestWithPayload = <T>(
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any,
  config: RequestInit,
) => Promise<T>

type RequestWithoutPayload = <T>(url: string, config: RequestInit) => Promise<T>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Transformer = (data: any) => any

type GetOriginalRequest = (token?: string) => Promise<Response>

enum methods {
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  POST = 'POST',
  DELETE = 'DELETE',
}

let isTokenRefreshing = false
let failedRequests: FailedRequest[] = []

const pushToFailedRequests = <T>(request: GetOriginalRequest): Promise<T> =>
  new Promise((resolve, reject) => {
    failedRequests.push({ resolve, reject })
  })
    .then((token: unknown): Promise<Response> => request(token as string))
    .then(response => getResponseBody<T>(response))
    .catch(error => Promise.reject(error))

const processQueue = (error: Error | null, token: string): void => {
  isTokenRefreshing = false
  failedRequests.forEach(({ reject, resolve }) => {
    if (error) reject(error)
    else resolve(token)
  })
  failedRequests = []
}

type FetcherParams = {
  baseUrl: string
  ssoUrl: string
  getRefreshToken: () => string | undefined
  getAccessToken: () => string | undefined
  onRefresh: ({ refreshToken, accessToken }: AuthTokens) => void
  requestDataTransformer: Transformer
  responseDataTransformer: Transformer
}

export type FetcherReturn = {
  get: RequestWithoutPayload
  put: RequestWithPayload
  patch: RequestWithPayload
  post: RequestWithPayload
  delete: RequestWithoutPayload
}

export const fetcher = (params: FetcherParams): FetcherReturn => {
  const {
    baseUrl,
    ssoUrl,
    getRefreshToken,
    getAccessToken,
    onRefresh,
    requestDataTransformer,
    responseDataTransformer,
  } = params
  const originalRefreshToken = getRefreshToken()
  const originalAccessToken = getAccessToken()

  const getNewAccessToken = (oldRefreshToken: string): Promise<AuthTokens> =>
    fetch(`${ssoUrl}${oldRefreshToken}`)
      .then(data => data.json())
      .then(({ refreshToken, accessToken }: AuthTokens) => {
        onRefresh({
          accessToken,
          refreshToken,
        })
        return { refreshToken, accessToken }
      })

  const request = async <T>(
    method: methods,
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any,
    config: RequestInit = {},
  ): Promise<T> => {
    const fetchConfig = {
      ...config,
      headers: {
        'content-type': 'application/json',
        ...config.headers,
      },
      method,
      body: payload ? JSON.stringify(requestDataTransformer ? requestDataTransformer(payload) : payload) : null,
    }

    const getOriginalRequest: GetOriginalRequest = token =>
      fetch(`${baseUrl}${url}`, {
        ...fetchConfig,
        headers: {
          ...(token ? { Authorization: token } : {}),
          ...fetchConfig.headers,
        },
      })

    if (isTokenRefreshing) return pushToFailedRequests(getOriginalRequest)

    const response: Response = await getOriginalRequest(originalAccessToken).then(res => {
      if (res.status === 419) {
        if (isTokenRefreshing) return pushToFailedRequests(getOriginalRequest)

        isTokenRefreshing = true

        if (originalRefreshToken === undefined) throw new Error('Refresh token is undefined')

        return getNewAccessToken(originalRefreshToken).then(async ({ accessToken }) => {
          /**
           * FIXME: Очень узкое место. Ждем, пока выполнится первый запрос, чтобы после этого
           * выполнить всю очередь. По каким-то причинам очередь не успевает заполняться полностью,
           * если так не сделать.
           */
          const newResponse = await getOriginalRequest(accessToken)
          processQueue(null, accessToken)
          return newResponse
        })
      }

      return res
    })

    if (response.ok) return getResponseBody<T>(response, responseDataTransformer)

    const errorData = await getResponseBody(response, responseDataTransformer)
    throw new NetworkError(response, errorData)
  }

  const getRequest: RequestWithoutPayload = (url, config) => request(methods.GET, url, null, config)
  const putRequest: RequestWithPayload = (url, payload, config) => request(methods.PUT, url, payload, config)
  const patchRequest: RequestWithPayload = (url, payload, config) => request(methods.PATCH, url, payload, config)
  const postRequest: RequestWithPayload = (url, payload, config) => request(methods.POST, url, payload, config)
  const deleteRequest: RequestWithoutPayload = (url, config) => request(methods.DELETE, url, null, config)

  return {
    get: getRequest,
    put: putRequest,
    patch: patchRequest,
    post: postRequest,
    delete: deleteRequest,
  }
}
