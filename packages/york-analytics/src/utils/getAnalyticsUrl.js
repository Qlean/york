import encodeAnalyticsEvent from './encodeAnalyticsEvent'

export default function({
  href,
  category,
  label,
  action,
  redirectUrl,
  ...properties
}) {
  const encodedEvent = encodeAnalyticsEvent({
    category,
    action,
    label,
    ...properties,
  })
  const rul = encodeURIComponent(href)
  const dl = window ? encodeURIComponent(window.location.href) : ''

  return `${redirectUrl}?${encodedEvent}&dl0=${dl}&rul=${rul}`
}
