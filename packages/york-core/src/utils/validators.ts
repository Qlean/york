const isInRange = (number: number, start: number, end: number): boolean => {
  return number >= start && number <= end
}

/**
 * Алгоритм Луна используется для валидации идентификационных номеров, в нашем случае номера карты.
 * В первую очередь нужен для того чтобы защитить пользователя от ошибок при ручном вводе.
 * https://en.wikipedia.org/wiki/Luhn_algorithm
 */
const validateWithLuhnAlgorithm = (value: string): boolean => {
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

export const validateCardNumber = (
  value: string,
  config: {
    minLength?: number
    maxLength?: number
  } = {},
): boolean => {
  if (typeof value !== 'string') {
    throw new Error(
      'Error in validateCardNumber. Card number must be provided as a string',
    )
  }

  const { minLength = 16, maxLength = 19 } = config
  if (minLength > maxLength) {
    throw new Error(
      `Error in validateCardNumber. 'minLength' cannot be greater then 'maxLength'. Got minLength: ${minLength} and maxLength: ${maxLength}.`,
    )
  }
  return (
    Boolean(value) &&
    !Number.isNaN(Number(value)) &&
    value.length >= minLength &&
    value.length <= maxLength &&
    validateWithLuhnAlgorithm(value)
  )
}

export const validateCardExpiry = (value: string): boolean => {
  if (typeof value !== 'string') {
    throw new Error(
      'Error in validateCardExpiry. Card expiry must be provided as a string',
    )
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

export const validateCardSecureCode = (
  value: string,
  config: {
    minLength?: number
    maxLength?: number
  } = {},
): boolean => {
  if (typeof value !== 'string') {
    throw new Error('Card secure code must be provided as a string')
  }
  const { minLength = 3, maxLength = 4 } = config
  if (minLength > maxLength) {
    throw new Error(
      `Error in validateCardSecureCode. 'minLength' cannot be greater then 'maxLength'. Got minLength: ${minLength} and maxLength: ${maxLength}.`,
    )
  }
  return (
    Boolean(value) &&
    !Number.isNaN(Number(value)) &&
    value.length >= minLength &&
    value.length <= maxLength
  )
}
