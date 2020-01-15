/* eslint-disable @typescript-eslint/explicit-function-return-type */
const getFormattedMoney = number => {
  const formattedNumber = new Intl.NumberFormat('ru-RU').format(number / 100)
  const suffix = 'р.'
  return `${formattedNumber}\u00a0${suffix}`
}

const formattersMap = {
  money: getFormattedMoney,
}

function format(formatter, value) {
  return formattersMap[formatter](value)
}

function curryFormat(value) {
  return (formatter = 'money') => format(formatter, value)
}

function addDiscount(value, discount) {
  const newValue = Math.ceil(value * (1 - discount / 100))
  return newValue > 0 ? newValue : 0
}

export default function money(value, discounts = 0) {
  if (Array.isArray(discounts)) {
    return curryFormat(
      discounts.reduce((acc, discount) => addDiscount(acc, discount), value),
    )
  }
  return curryFormat(addDiscount(value, discounts))
}
