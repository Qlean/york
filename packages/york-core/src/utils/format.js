export const capitalize = str =>
  `${(str[0] || '').toUpperCase()}${str.slice(1)}`

export const formatPhone = phone =>
  phone
    .replace(/\D/g, '')
    .replace(
      /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
      '+$1\u00a0($2)\u00a0$3-$4-$5',
    )

export const formatPhoneHref = phone => `tel:+${phone.replace(/\D/g, '')}`
