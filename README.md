# York - Qlean utils and UI Components libraries

## Development

1. Install [lerna](https://github.com/lerna/lerna) globally:
```sh
$ npm i -g lerna
```
2. Clone and move inside repo:
```sh
$ git clone git@github.com:Qlean/york.git && cd york
```
3. Install packages dependencies and symlink them each other:
```sh
$ lerna bootstrap
```
4. Link your packages to use in target application:
```sh
$ lerna exec npm link
```
5. If you want to execute single _build_ for all packages use:
```sh
$ lerna run build
```
or for _watch_ all packages type:
```sh
$ lerna run --parallel watch
```
You also can use watch only for one package with flag `--scope` or `--ignore` for exception:
```sh
$ lerna run --parallel watch --ignore york-react-native
```
6. Within target application directory link required package:
```sh
npm link <package name>
```

## Contributing

1. Follow existing pattern of adding your code to package, use it in your application and be confident that it is exporting as expected.
2. Write tests and try to cover as much cases of use in your application as it's possible.
3. If you're extending existing component don't forget about backward compatibility.
4. Use [semantic versioning](https://semver.org/) in your releases.

## Publishing

If you want to publish all your contribution first of all you need to check your code with test and lint scripts for all packages by typing:
```sh
$ lerna run test

$ lerna run lint

$ lerna publish
```
