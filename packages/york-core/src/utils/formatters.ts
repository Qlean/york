export const capitalize = (value: string): string =>
  `${(value[0] || '').toUpperCase()}${value.slice(1)}`

export const formatPhone = (phone: string): string =>
  phone
    .replace(/\D/g, '')
    .replace(
      /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
      `${phone.startsWith('8') ? '' : '+'}$1\u00a0($2)\u00a0$3-$4-$5`,
    )

export const formatPhoneHref = (phone: string): string =>
  `tel:${phone.startsWith('8') ? '' : '+'}${phone.replace(/\D/g, '')}`

export const formatMoney = (money: number | string): string =>
  `${money}\u00a0р.`
