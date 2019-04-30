import formatServerError from '../formatServerError'

describe('formatServerError', () => {
  const error = {
    data: {
      errors: {
        1: ['first', 'second'],
        2: ['third'],
        3: [['fourth'], ['fifth', 'sixth']],
        4: 'seventh',
        5: [],
        6: [{ foo: 'eight' }],
        7: { foo: 'nine' },
        8: null,
      },
    },
  }

  test('Formats complex error data', () => {
    expect(formatServerError(error)).toEqual({
      1: 'First, second',
      2: 'Third',
      3: 'Fourth, fifth, sixth',
      4: 'Seventh',
      6: 'Eight',
      7: 'Nine',
    })
  })

  test('Formats complex error data with flattening', () => {
    expect(formatServerError(error, { flattenErrors: true })).toEqual({
      _error:
        'First, second, third, fourth, fifth, sixth, seventh, eight, nine',
    })
  })

  test('Flattens error automatically if error data is not object', () => {
    expect(
      formatServerError({ data: { errors: ['first', 'second', 'third'] } }),
    ).toEqual({ _error: 'First, second, third' })

    expect(formatServerError({ data: { error: 'some string error' } })).toEqual(
      { _error: 'Some string error' },
    )
  })

  test('Works fine with empty errors', () => {
    expect(formatServerError()).toEqual({})
    expect(formatServerError({ data: { error: {} } })).toEqual({})
    expect(formatServerError({ data: undefined })).toEqual({})
  })
})
