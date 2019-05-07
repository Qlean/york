import format from './format'

// @param {Number} value

function curryFormat(value) {
  // @param {String} formatter

  return (formatter = 'money') => format(formatter, value)
}

// @param {Number} value
// @param {Number} discount

function addDiscount(value, discount) {
  const newValue = Math.ceil(value * (1 - discount / 100))

  return newValue > 0 ? newValue : 0
}

// @param {Number} value
// @param {Number|Array} discounts

export default function money(value, discounts = 0) {
  if (Array.isArray(discounts)) {
    return curryFormat(
      discounts.reduce((acc, discount) => addDiscount(acc, discount), value),
    )
  }

  return curryFormat(addDiscount(value, discounts))
}
