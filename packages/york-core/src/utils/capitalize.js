export default function capitalize(string) {
  const unwrappedString = typeof string === 'string' ? string : '';
  return `${(unwrappedString[0] || '').toUpperCase()}${unwrappedString.slice(1)}`;
}
