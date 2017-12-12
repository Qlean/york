# York React Native - Qlean React Native Components library

<a name="development"></a>
## Development Process

If you prefer test your changes in a real application you can do the following:

1. Run `npm install && npm link && npm run watch` in `york-react-native` repository
2. `cd` to your application, run `npm link york-react-native` to point at your local repository for use.
3. Run your mobile application and rock on

#### Adding new component
1. Create file with component in `src/<Component name>` folder
2. Add default export to `src/index.js`
3. Implement component

#### Don't forget to run lint before opening PR
1. Run `npm run lint` to verify there are no linting errors

#### Testing environment

At this moment there is no possibility to add tests to this repo. For tests we need `react-native` in devDependencies which fails our target application with duplicating React Native components.

###### Issues for watch

1. [Issue with duplicating components reproduced on cleaners app](https://github.com/facebook/react-native/issues/13364)
2. [Issue with failed module AccessibilityInfo reproduced on cleaners app](https://github.com/facebook/react-native/issues/14209)

###### What wasn't help but was used for finding solution:
1. `npm start -- --reset-cache`
2. `node --preserve-symlinks`
