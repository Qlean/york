import capitalize from '../capitalize';

describe('capitalize', () => {
  test('Capitalizes string', () => {
    expect(capitalize('foo')).toBe('Foo');
    expect(capitalize('Foo')).toBe('Foo');
    expect(capitalize('foo bar baz')).toBe('Foo bar baz');
  });
  test('Returns empty string on weird arguments', () => {
    expect(capitalize()).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(NaN)).toBe('');
    expect(capitalize({})).toBe('');
    expect(capitalize([])).toBe('');
  });
});
