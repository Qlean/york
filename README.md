# York

Утилиты и UI-компоненты

## Пакеты

- `york-core` — Утилиты, гайдовые цвета
- `york-web` — UI-компоненты для React
- `york-react-native` — UI-компоненты для React Native
- `york-styleguide` — Стайлгайд с компонентами

## Установка

```
$ git clone git@github.com:Qlean/york.git && cd york
$ npm run bootstrap
```

## Запуск

```
$ npm start
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
