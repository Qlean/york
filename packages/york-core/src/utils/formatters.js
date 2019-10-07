export const capitalize = string =>
  `${(string[0] || '').toUpperCase()}${string.slice(1)}`

export const formatPhone = phone =>
  phone
    .replace(/\D/g, '')
    .replace(
      /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
      '+$1\u00a0($2)\u00a0$3-$4-$5',
    )

export const formatPhoneHref = phone => `tel:+${phone.replace(/\D/g, '')}`

export const formatMoney = money => `${money}\u00a0р.`
