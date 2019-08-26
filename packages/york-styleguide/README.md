York это дизайн-система для компании Qlean и ее вертикалей. Она включает в себя три пакета:

- `@qlean/york-core` — Утилиты, гайдовые цвета, размеры
- `@qlean/york-web` — UI-компоненты для React
- `@qlean/york-react-native` — UI-компоненты для React Native

### Установка

Пакеты открыто лежат в npm, их установка ничем не отличается от установки любых других зависимостей:

```shell static
$ npm i @qlean/york-core @qlean/york-web
```

У пакетов нет прямых зависимостей, но есть peer-зависимости. Это `react`, `ramda` и `styled-components` (для `york-web`). Они обязательны для работы.

### Использование

Во всех пакетах используется только основной неймспейс: `import { Text } from '@qlean/york-web'`. Экспорта по умолчанию в них нет.

### Разработка

Установка `york` для локального использования и разработки описана [в репозитории](https://github.com/Qlean/york).


### Соглашения по именованию

#### Проп, в котором ожидается инстанс компонента должен содержать в названии `Element`

```js static
  <Button iconElement={<svg name="error"/>} title="Сообщить об ошибке" />
```

#### Если поддерживается рендеринг любых нод, а не только компонентов, то в названии должно быть `Node`

```js static
  <Header centerNode={<Pagination />} />
  <Header centerNode="Текст" />
  <Header centerNode={null} />
```

#### Проп, предназначенный для формирования композитной части компонента, должен содержать в названии `View`

```js static
  <Screen
    leftView={{
      node: <Icon name="back" />,
      onPress: () => {},
      isDisabled: false,
    }}
  > 
    <Text>Текст внутри экрана</Text>
  </Screen>
```