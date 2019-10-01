export default function({ href, category, name, action, redirectUrl }) {
  const isLinkRelative = new RegExp('^(?:[a-z]+:)?//', 'i')
  const rul = isLinkRelative
    ? encodeURIComponent(`${window.location.origin}${href}`)
    : encodeURIComponent(href)
  const dl = encodeURIComponent(window.location.href)
  return `${redirectUrl}?tstamp0=${Date.now()}&ec0=${encodeURI(
    category,
  )}&el0=${encodeURI(name)}&ea0=${encodeURI(action)}&dl0=${dl}&rul=${rul}`
}
