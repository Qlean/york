import formatPhoneForHref from '../formatPhoneForHref';

describe('Format phone to href text', () => {
  const finalResult = 'tel:84955454819';

  test('With braces and dashes', () => {
    const phone = '8 (495) 54-54-819';
    expect(formatPhoneForHref(phone)).toBe(finalResult);
  });
  test('With spaces', () => {
    const phone = '8 495 54 54 819';
    expect(formatPhoneForHref(phone)).toBe(finalResult);
  });
});
