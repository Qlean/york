# York Core - Qlean JavaScript utilities library

<a name="development"></a>
## Development Process

If you prefer test your changes in a real application instead TDD, you can do the following:

2. Run `npm link && npm run watch` in `york-core` repository
3. `cd` to your application, run `npm link york-core` to point to your local repository for test.
4. Run your utility target application and rock on

#### Adding new utility
1. Create file with utility in `src` folder
2. Add default export to `src/index.js`
3. Implement utility and don't forget about test in `__test__` directory

#### Don't forget to run tests before opening PR
1. Run `npm test` to verify all test cases pass.
2. Run `npm run lint` to verify there are no linting errors
