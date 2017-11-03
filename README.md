# Установка
`npm install https://github.com/Qlean/york`

# Описание
Библиотека включает в себя набор компонентов, вспомогательных утилит и всевозможные ассеты, необходимые в работе. На основании этого проект разделен на 4 части:

- `assets`
- `components`
- `styles`
- `utils`

# Storybook
К проекту подключен storybook, который позволим вам ознакомиться со всеми компонентами, которые реализованы в проекте.

Для запуска storybook используейте команду: `npm run storybook`

К storybook подключены 2 аддона: [knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs) и [info](https://github.com/storybooks/storybook/tree/master/addons/info)

## Knobs
Позволяет выводить элементы управления компонента, с помощью которых можно посмотреть все вариации компонента на основе props.

## Info
Показывает доступные props, способ подключения и описание.

![Example](https://github.com/Qlean/york/blob/master/storybook.png)

# Детали
Внутри каждой папки находится документация по разделу.

# Работа из соседней папки
1. Для корректной работы из соседней папки нужно запустить проект в режиме watch через команду `npm run watch`.
2. В develop конфиг webpack'а прописать алиас:
  `{ york: path.resolve(PATH_TO_YORK_DIR) }`


> Или можно добавить в общий конфиг:
```
if (process.env.NODE_ENV !== 'production') {
  commonConfig.resolve.alias.york = resolve(PATH_TO_YORK_DIR);
}
```
# Работа с исходниками
На текущий момент существует проблема с sourcemaps, а именно с конкатенацией sourcemap'ов york'а и проекта, в котором он используется. Если на проде нужны sourcemaps с данными из york, то можно испортировать компоненты напрямую из папки `src`