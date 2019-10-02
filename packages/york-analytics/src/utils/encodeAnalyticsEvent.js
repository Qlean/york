export default function({ category, action, label, ...properties }) {
  const params = `tstamp0=${Date.now()}&ec0=${encodeURI(
    category,
  )}&el0=${encodeURI(label)}&ea0=${encodeURI(action)}`
  return Object.keys(properties).length > 0
    ? `${params}&prp0=${encodeURI(JSON.stringify(properties))}`
    : params
}
