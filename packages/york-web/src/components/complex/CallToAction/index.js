import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { GridContainer, GridColumn } from 'york-web/components/simple'
import { Text, Separator } from 'york-web/components/primitive'
import { uiPoint, media } from 'york-web/utils'

const StyledActionContainer = styled.div`
  width: ${uiPoint * 60}px;

  ${media.mobile(`
    width: 100%;
    text-align: center;
  `)}
`

/** Компонент призыва к действию */
const CallToAction = ({ title, description, caption, action, rightNode }) => (
  <GridContainer
    alignItems="center"
    mobileProps={{ flexDirection: 'column-reverse' }}
  >
    <GridColumn columns={6} mobileProps={{ columns: 12 }}>
      <Separator mobileProps={{ height: 8 }} />
      {title && (
        <>
          <Text preset="link" color="green">
            {title}
          </Text>
          <Separator height={3} mobileProps={{ height: 1 }} />
        </>
      )}
      <Text
        preset="header3"
        wideProps={{ preset: 'header2' }}
        mobileProps={{ preset: 'header5' }}
      >
        {description}
      </Text>
      <Separator height={8} mobileProps={{ height: 4 }} />
      <StyledActionContainer>{action}</StyledActionContainer>
      {caption && (
        <>
          <Separator height={2} />
          <Text color="grey">{caption}</Text>
        </>
      )}
    </GridColumn>
    <GridColumn
      columns={6}
      mobileProps={{
        columns: 12,
      }}
    >
      {rightNode}
    </GridColumn>
  </GridContainer>
)

CallToAction.defaultProps = {
  title: null,
  caption: null,
}

CallToAction.propTypes = {
  /** Заголовок */
  title: PropTypes.string,
  /** Текст */
  description: PropTypes.string.isRequired,
  /** Кнопка, ссылка или другой экшен */
  action: PropTypes.node.isRequired,
  /** Подсказка под кнопкой */
  caption: PropTypes.string,
  /** Компонент, который рендерится справа */
  rightNode: PropTypes.node.isRequired,
}

export default CallToAction
