import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Separator } from 'york-web/components/primitive'
import { GridContainer, GridColumn } from 'york-web/components/simple'
import { mobileHorizontalPadding, media } from 'york-web/utils'

/**
 * Ширина задана потому что этот блок иногда оказывается внутри флекса и чаще всего мы хотим
 * растянуть его по всей ширине.
 */
const StyledLayoutBlock = styled.div`
  width: 100%;
  ${media.mobile(`padding: 0 ${mobileHorizontalPadding}px`)}
`

/**
 * Базовый блок для верстки страниц. Оборачивает свое содержимое в 12-колоночную сетку, центрует
 * и добавляет горизонтальные отступы на мобильных устройствах.
 *
 * Также поддерживает стандартизированные вертикальные отступы до соседних блоков.
 */
export default function LayoutBlock({
  withVerticalPadding,
  children,
  ...rest
}) {
  return (
    <StyledLayoutBlock {...rest}>
      {withVerticalPadding && (
        <Separator height={12} mobileProps={{ height: 8 }} />
      )}
      <GridContainer>
        <GridColumn>{children}</GridColumn>
      </GridContainer>
      {withVerticalPadding && (
        <Separator height={12} mobileProps={{ height: 8 }} />
      )}
    </StyledLayoutBlock>
  )
}

LayoutBlock.defaultProps = {
  withVerticalPadding: false,
}

LayoutBlock.propTypes = {
  /** Наличие вертикальных отступов */
  withVerticalPadding: PropTypes.bool,
  /** Содержимое блока */
  children: PropTypes.node.isRequired,
}
