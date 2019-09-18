import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  GridContainer,
  GridColumn,
  Text,
  Separator,
  Button,
  uiPoint,
  media,
} from '@qlean/york-web'

const StyledButtonContainer = styled.div`
  width: ${uiPoint * 80}px;

  ${media.mobile(`
    width: 100%;
    text-align: center;
  `)}
`

/** Компонент для призыва к действию */
const CallToAction = ({
  title,
  text,
  actionTitle,
  actionHint,
  buttonProps,
  rightView,
}) => (
  <GridContainer
    alignItems="center"
    mobileProps={{ flexDirection: 'column-reverse' }}
  >
    <GridColumn columns={6} mobileProps={{ columns: 12 }}>
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
        {text}
      </Text>
      <Separator height={8} mobileProps={{ height: 4 }} />
      <StyledButtonContainer>
        <Button {...buttonProps}>{actionTitle}</Button>
        {actionHint && (
          <>
            <Separator height={2} />
            <Text color="grey">{actionHint}</Text>
          </>
        )}
      </StyledButtonContainer>
    </GridColumn>
    <GridColumn
      columns={6}
      mobileProps={{
        columns: 12,
      }}
    >
      <>
        {rightView.node}
        <Separator height={0} mobileProps={{ height: 8 }} />
      </>
    </GridColumn>
  </GridContainer>
)

CallToAction.defaultProps = {
  title: null,
  actionHint: null,
}

CallToAction.propTypes = {
  /** Заголовок */
  title: PropTypes.string,
  /** Текст */
  text: PropTypes.string.isRequired,
  /** Текст кнопки */
  actionTitle: PropTypes.string.isRequired,
  /** Подсказка под кнопкой */
  actionHint: PropTypes.string,
  /** Пропсы кнопки */
  buttonProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isSubmitting: PropTypes.bool,
  }).isRequired,
  /** Компонент, который рендерится справа */
  rightView: PropTypes.shape({
    node: PropTypes.node.isRequired,
  }).isRequired,
}

export default CallToAction
