const getAnalyticsName = (name, analyticsContext) => {
  return analyticsContext && analyticsContext.category
    ? `${analyticsContext.category}.${name}`
    : name
}

export default getAnalyticsName
