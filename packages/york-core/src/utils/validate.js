const isInRange = (number, start, end) => {
  return number >= start && number <= end
}

/**
 * Алгоритм Луна используется для валидации идентификационных номеров, в нашем случае номера карты.
 * В первую очередь нужен для того чтобы защитить пользователя от ошибок при ручном вводе.
 * https://en.wikipedia.org/wiki/Luhn_algorithm
 */
export const validateWithLuhnAlgorithm = value => {
  const sum = value
    .split('')
    .reverse()
    .reduce((acc, current, index) => {
      let number = Number(current)
      if ((value.length - index) % 2 !== 0) {
        number *= 2
        if (number > 9) {
          number -= 9
        }
      }
      return acc + number
    }, 0)
  return sum % 10 === 0
}

export const validateCardNumber = (value, config = {}) => {
  const { minLength = 16, maxLength = 19 } = config
  const cardNumber = value.split(' ').join('')
  return (
    cardNumber &&
    !Number.isNaN(Number(cardNumber)) &&
    cardNumber.length >= minLength &&
    cardNumber.length <= maxLength &&
    validateWithLuhnAlgorithm(cardNumber)
  )
}

export const validateCardExpirationDate = value => {
  const [monthString, yearString] = value.split('/')
  if (
    !monthString ||
    !yearString ||
    monthString.length < 2 ||
    yearString.length < 2
  ) {
    return false
  }

  const today = new Date()
  const currentYearString = String(today.getFullYear()).slice(2)

  const month = Number(monthString)
  const year = Number(yearString)
  const currentYear = Number(currentYearString)
  const currentMonth = today.getMonth() + 1

  const isCurrentYear = year === currentYear
  const isYearValid = !Number.isNaN(year) && isInRange(year, currentYear, 99)
  const isMonthValid =
    !Number.isNaN(month) &&
    isInRange(month, isCurrentYear ? currentMonth : 1, 12)

  return isMonthValid && isYearValid
}

export const validateCardCVC = (value, config = {}) => {
  const { minLength = 3, maxLength = 4 } = config

  return (
    value &&
    !Number.isNaN(Number(value)) &&
    value.length >= minLength &&
    value.length <= maxLength
  )
}
