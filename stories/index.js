import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Button from '../src/components/Button'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories
  .add('Button', () => (
    <Button
      href='https://www.facebook.com/messages/t/270092376765399'
      type='social'
      network={select('network', { messenger: 'messenger', telegram: 'telegram', viber: 'viber' }, 'messenger')}
      children={text('children', 'Messenger')}
    />
  ))