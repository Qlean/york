# York Web - Qlean React Components library

<a name="development"></a>
## Development Process

If you prefer test your changes in a real application instead TDD, you can do the following:

2. Run `npm link && npm run watch` in `york-web` repository
3. `cd` to your application, run `npm link york-web` to point to your local repository for test.
4. Run your react application and rock on

#### Adding new component
1. Create file with component in `src/<Component name>` folder
2. Add default export to `src/index.js`
3. Implement component and don't forget about test file with name `<Component name>.test.js` directory

#### Don't forget to run tests before opening PR
1. Run `npm test` to verify all test cases pass.
2. Run `npm run lint` to verify there are no linting errors
