import * as R from 'ramda'

import { capitalize } from './formatters'

const getErrorData = error => {
  const data = R.prop('data', error) || {}
  const errors = data.errors || data.error || []
  return typeof errors === 'string' ? [errors] : errors
}

const flattenAll = i =>
  R.flatten(
    R.values(i).map(value => {
      const type = R.type(value)
      return type === 'Object' || type === 'Array' ? flattenAll(value) : value
    }),
  )

const flattenErrors = errors =>
  R.pipe(
    R.unless(Array.isArray, value => [value]),
    flattenAll,
    R.filter(R.is(String)),
    R.join(', '),
    capitalize,
  )(errors)

const formatServerError = (error, config = {}) => {
  const errorData = getErrorData(error)
  if (Array.isArray(errorData) && !errorData.length) {
    return {}
  }
  if (Array.isArray(errorData) || config.flattenErrors) {
    return { _error: flattenErrors(errorData) }
  }
  return R.pipe(
    R.map(flattenErrors),
    R.filter(R.identity),
  )(errorData)
}

export default formatServerError
