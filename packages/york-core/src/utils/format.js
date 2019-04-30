const getFormattedMoney = number => {
  const formattedNumber = new Intl.NumberFormat('ru-RU').format(number / 100)
  const suffix = 'р.'

  return `${formattedNumber}\u00a0${suffix}`
}

const formattersMap = {
  money: getFormattedMoney,
}

export default function format(formatter, value) {
  return formattersMap[formatter](value)
}
