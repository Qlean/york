import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { uiPoint, media } from 'york-web/utils'
import { View } from 'york-web/components/primitive'

const gutter = uiPoint * 4

const maxWidths = {
  mobile: 600,
  base: 940,
  wide: 1120,
}

const StyledGridContainer = styled.div`
  margin: 0 auto;
  ${media.mobile(`
    width: 100%;
    max-width: ${maxWidths.mobile}px;
  `)}
  ${media.base(`max-width: ${maxWidths.base}px;`)}
  ${media.wide(`max-width: ${maxWidths.wide}px;`)}
`

const StyledGridContent = styled(View)`
  margin-left: ${-gutter}px;
`

/**
 * Контейнер для 12-колоночной сетки. Не может быть родителем ничего кроме `<GridColumn>`. Основан
 * на `<View>` и поддерживает все его пропсы. Компонент не имеет минимальной ширины, только
 * максимальную, что позволяет использовать его на любом уровне иерархии приложения и даже внутри
 * других контейнеров.
 */
export default function GridContainer({ children, ...rest }) {
  return process.env.NODE_ENV === 'production' ? (
    <StyledGridContainer>
      <StyledGridContent {...rest}>{children}</StyledGridContent>
    </StyledGridContainer>
  ) : (
    <StyledGridContainer>
      <StyledGridContent {...rest}>
        {React.Children.map(children, child => {
          const name = child.type.name || child.type
          if (name !== 'GridColumn') {
            // eslint-disable-next-line no-console
            console.warn(
              `Expected GridColumn as GridContainer's child, instead got ${name}`,
            )
          }
          return React.cloneElement(child, { isChildOfGridContainer: true })
        })}
      </StyledGridContent>
    </StyledGridContainer>
  )
}

GridContainer.propTypes = {
  /** Колонки, должны иметь тип `GridColumn` */
  children: PropTypes.node.isRequired,
}

GridContainer.gutter = gutter
GridContainer.maxWidths = maxWidths
