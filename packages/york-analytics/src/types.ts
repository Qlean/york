type EventPayload = string | number

export type TrackEvent = (event: {
  action: string
  category: string
  label: string
  [payload: string]: EventPayload
}) => void

export type RootAnalytics = {
  appId: string
  trackEvent: TrackEvent
}

export type Analytics = RootAnalytics & {
  category: string
  analyticsRoute: string
}

export type PageConfig = {
  name: string
  payload: {
    [key: string]: EventPayload
  }
  isPayloadReady: boolean
}
