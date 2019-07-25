# York

Утилиты и UI-компоненты

## Пакеты

- `york-core` — Утилиты, гайдовые цвета
- `york-web` — UI-компоненты для React
- `york-react-native` — UI-компоненты для React Native
- `york-styleguide` — Стайлгайд с компонентами
- `york-expo` — Expo-приложение для тестирования компонентов `york-react-native`

## Установка

```sh
$ npm i
$ npm i -g expo-cli  # Только для работы с york-expo
$ npm run bootstrap
```

## Запуск

```sh
$ npm run start:web   # Запустить веб-версию
$ npm run start:expo  # Запустить RN-версию
$ npm start           # Запустить все
```

## Линковка

Иногда требуется проверять новые версии пакета локально в реальных проектах до паблиша. В большинстве случаев хватает `npm link`, но есть особые случаи.

### york-react-native

Стандартный `react-native` сборщик не дружит с `npm link`, поэтому для линковки используется [wml](https://github.com/wix/wml).

Сначала создадим линк.

```sh
$ npm install -g wml
$ wml add /path-to-york/packages/york-react-native/ /path-to-react-native-app/node_modules/@qlean/york-react-native
```

Теперь, всякий раз при локальном использовании йорка достаточно использовать

```sh
$ wml start
```

## Публикация

Работает только из ветки `master`

Собрать, прогнать линтер и тесты, поднять версию, расставить теги, опубликовать в npm

```sh
$ npm run release:npm   # Опубликовать пакеты в npm
$ npm run release:expo  # Опубликовать york-expo
$ npm run release       # Опубликовать все
```

Если что-то пошло не так (не залилось в npm, не проставились теги), то можно попробовать

```sh
$ npm run release -- --force-publish=*
```

[Прочие команды и опции](https://github.com/lerna/lerna/tree/2.x#commands)

## Общие команды для пакетов

Скрипты в `package.json` должны быть везде одни и те же, чтобы можно было запускать их с помощью Lerna для всех пакетов сразу.

| Команда      | Назначение                      |
| ------------ | ------------------------------- |
| `start`      | Запуск в режиме разработки      |
| `build`      | Сборка продакшен-бандла         |
| `clean`      | Удаление временных файлов       |
| `lint`       | Прогон линтера                  |
| `test`       | Прогон тестов                   |
| `test:watch` | Запуск тестов в режиме слежения |
