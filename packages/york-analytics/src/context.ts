import { createContext } from 'react'
import { AppId, TrackEvent, Category } from './types'

interface RootAnalyticsProps {
  /** Имя приложения */
  appId: AppId
  /** Функция для трекинга событий */
  trackEvent: TrackEvent
}

interface AnalyticsProps {
  /** Имя приложения */
  appId: AppId
  /** Категория событий этого провайдера */
  category: Category
  /** @TODO Добавить описание */
  analyticsRoute: string
  /** Функция для трекинга событий */
  trackEvent: TrackEvent
}

export const RootAnalyticsContext = createContext<Partial<RootAnalyticsProps>>(
  {},
)

export const AnalyticsContext = createContext<Partial<AnalyticsProps>>({})
