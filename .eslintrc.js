module.exports = {
  extends: '@qlean/eslint-config',
  rules: {
    'import/no-extraneous-dependencies': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
