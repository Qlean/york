import React from 'react'
import { storiesOf } from '@storybook/react'

import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info'

import '../src/styles/global'

import Button from '../src/components/web/Button'
import Social from '../src/components/web/Button/components/Social'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories
  .add('Social button', withInfo({
    name: 'Кнопка со ссылкой на соц. сеть.',
    propTables: [Social]
  })(() => (
    <Button
      type='social'
      network={select('network', { messenger: 'messenger', telegram: 'telegram', viber: 'viber' }, 'messenger')}
      href='https://www.facebook.com/messages/t/270092376765399'
      children={text('children', 'Messenger')}
    />
  )))