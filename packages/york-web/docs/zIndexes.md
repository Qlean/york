`import { zIndexes } from '@qlean/york-web'`

Типовые z-индексы, рекомендуются использовать только в проекте только их. В порядке возрастания:

- `stickyHeader` зарезервирован для компонента `Header`.
- `header` зарезервирован для компонента `Header`.
- `dropdown` для тултипов, выпадающих списков, автозаполнения и т.д.
- `modal` для модальных окон. Должен быть обязательно задан для всех модалок, чтобы образовать новый stacking context и избежать «просвечивания» элементов с меньшими индексами.
