import React from 'react'
import styled from 'styled-components'

import { g, media, mediaMaxWidths } from 'styles'

import View from '../View'

const GUTTER = g(4)

const StyledGridContainer = styled.div`
  margin: 0 auto;
  ${media.mobile(`max-width: ${mediaMaxWidths.mobile}px;`)}
  ${media.base(`max-width: ${mediaMaxWidths.base}px;`)}
  ${media.wide(`max-width: ${mediaMaxWidths.wide}px;`)}
`

const StyledGridContent = styled(View)`
  margin-left: ${-GUTTER}px;
`

/**
 * Контейнер для 12-колоночной сетки. Не может быть родителем ничего кроме GridColumn. Основан на View и поддерживает все его пропсы.
 */
export default function GridContainer(props) {
  return (
    <StyledGridContainer>
      <StyledGridContent {...props} />
    </StyledGridContainer>
  )
}

GridContainer.GUTTER = GUTTER
