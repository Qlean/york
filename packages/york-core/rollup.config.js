module.exports = {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'lib/index.js',
    exports: 'named',
  },
  watch: {
    include: 'src/**',
    clearScreen: false,
  },
};
