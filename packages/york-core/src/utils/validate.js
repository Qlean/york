const isInRange = (number, start, end) => {
  return number >= start && number <= end
}

/**
 * Алгоритм Луна используется для валидации идентификационных номеров, в нашем случае номера карты.
 * В первую очередь нужен для того чтобы защитить пользователя от ошибок при ручном вводе.
 * https://en.wikipedia.org/wiki/Luhn_algorithm
 * @param {string} value - номер карты
 * @returns {boolean}
 */
const validateWithLuhnAlgorithm = value => {
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

/**
 * @param {string} value - номер карты
 * @param {object} config - параметры конфигурации
 * @param {number} config.minLength - минимальная длина номера карты
 * @param {number} config.maxLength - максимальная длина номера карты
 * @return {boolean}
 */
export const validateCardNumber = (value, config = {}) => {
  if (typeof value !== 'string') {
    throw new Error('Card number must be provided as a string')
  }
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

/**
 * @param {string} value - месяц и год в формате 'MM/YY'
 * @return {boolean}
 */
export const validateCardExpiry = value => {
  if (typeof value !== 'string') {
    throw new Error('Card expiry must be provided as a string')
  }
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

/**
 * @param {string} value - код CVC или другой
 * @param {object} config - параметры конфигурации
 * @param {number} config.minLength - минимальная длина номера карты
 * @param {number} config.maxLength - максимальная длина номера карты
 * @return {boolean}
 */
export const validateCardSecureCode = (value, config = {}) => {
  if (typeof value !== 'string') {
    throw new Error('Card secure code must be provided as a string')
  }
  const { minLength = 3, maxLength = 4 } = config

  return (
    value &&
    !Number.isNaN(Number(value)) &&
    value.length >= minLength &&
    value.length <= maxLength
  )
}
