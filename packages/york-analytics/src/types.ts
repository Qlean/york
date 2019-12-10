export type EventPayload = string | number

export interface AnalyticsEvent {
  action: string
  category: string
  label: string
  [payload: string]: EventPayload
}

export interface AnalyticsEventInput {
  label: string
  action: string
  [key: string]: EventPayload
}

export type TrackEvent = (e: AnalyticsEvent) => void

export type AppId = string

export type Category = string
