# York - Qlean utils and UI Components libraries

<a name="development"></a>
## Development Process

1. Install [lerna](https://github.com/lerna/lerna) globally with command `npm i -g lerna` and clone this repo. We recommend to investigate `lerna` for advanced usage with all benefits.
2. Move to your clonned project folder and type `lerna bootstrap`. All your packages will symlink each other and install their dependencies.
3. (Optional) If you need to link all this packages for using them in your applications you can simply type:
```sh
$ lerna exec npm link
```
or if you need to produce only `york-web` link for example
```sh
$ lerna exec npm link --scope york-web
```
Then inside your target application folder type `npm link <package name>`.
4. If you want to execute single build you can use `lerna run build` or for watch type `lerna run --parallel watch`. Ignoring package with `--ignore <package name>` flag or use scope for only executed package `--scope <package name>`.

## Publishing

If you want to publish all your contribution first of all you need to check your code with test and lint scripts for all packages by typing:
```sh
$ lerna run test
lerna run link
```
