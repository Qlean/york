# York

Утилиты и UI-компоненты

## Пакеты

* `york-core` — Утилиты, гайдовые цвета
* `york-react-native` — UI-компоненты для React Navite

## Установка

```
$ git clone git@github.com:Qlean/york.git && cd york
$ npm i -g lerna@2.11.0
$ lerna bootstrap
```

## Использование в режиме разработки

Запустить автоматическую пересборку всех пакетов
```
$ lerna run --parallel watch
```

Проставить глобальные симлинки на пакеты
```
$ lerna exec npm link
```

Прилинковать нужный пакет (запускать в папке приложения)
```
$ npm link <package name>
```

## Публикация

Работает только из ветки `master`

Проверить изменения
```
$ lerna update
```

Собрать, прогнать линтер и тесты, поднять версию, расставить теги, опубликовать в npm
```
$ npm run release
```

Если что-то пошло не так (не залилось в npm, не проставились теги), то можно попробовать
```
$ npm run release -- --force-publish=*
```

[Прочие команды и опции](https://github.com/lerna/lerna/tree/2.x#commands)
