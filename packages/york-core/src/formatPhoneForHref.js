export default function formatPhoneForHref(phone) {
  return `tel:${phone.replace(/(\s|-|\(|\))/g, '')}`;
}
