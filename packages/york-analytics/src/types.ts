export type EventAction = 'click' | 'pageView' | 'mount' | 'press' | 'submit'

type EventPayload = string | number

export interface AnalyticsEvent {
  category: string
  label: string
  action: EventAction
  [payload: string]: EventPayload
}

export interface AnalyticsEventInput {
  label: string
  action: EventAction
  [payload: string]: EventPayload
}

export type TrackEvent = (e: AnalyticsEvent) => void

export type AppId = string

export type Category = string
