# York - Qlean utils and UI Components libraries

## Packages

* `york-core` - Utils
* `york-web` - React UI Components
* `york-react-native` - React Native UI Components

## Installation

Install required package with command:
```sh
$ npm install --save @qlean/<package name>
```

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

* Follow existing export patterns
* Write tests
* Write API docs
* Use [semantic versioning](https://semver.org/)

## Publishing

If you want to publish all your contribution check your code with test and lint scripts for all packages by typing:
```sh
$ git checkout master
$ git pull
$ npm run release
```
