import { createContext } from 'react'
import { RootAnalytics, Analytics } from './types'

export const RootAnalyticsContext = createContext<RootAnalytics | null>(null)

export const AnalyticsContext = createContext<Analytics | null>(null)
