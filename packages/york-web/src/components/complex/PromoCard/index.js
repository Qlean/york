import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import {
  media,
  sizes,
  transitions,
  borderRadiuses,
  uiPoint,
} from 'york-web/utils'
import { Separator, Text } from 'york-web/components/primitive'

const heights = {
  l: {
    wide: uiPoint * 80,
    base: uiPoint * 68,
    mobile: uiPoint * 80,
  },
  m: {
    wide: uiPoint * 80,
    base: uiPoint * 68,
    mobile: uiPoint * 80,
  },
  s: {
    wide: uiPoint * 38,
    base: uiPoint * 32,
    mobile: uiPoint * 32,
  },
}

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.05);
  opacity: 0;
  transition: ${transitions.medium};
`

const StyledContainer = styled.div`
  position: relative;
  border-radius: ${borderRadiuses.medium};
  overflow: hidden;

  ${({ size }) => `
    ${media.wide(`
      height: ${heights[size].wide}px;
    `)}
    ${media.base(`
      height: ${heights[size].base}px;
    `)}
    ${media.mobile(`
      height: ${heights[size].mobile}px;
    `)}
  `}

  :hover ${StyledOverlay} {
    opacity: 1;
  }
`

const StyledImageContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
  background-position: bottom right;

  ${media.mobile(`
    bottom: -5%;
  `)}
`

const StyledContent = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ size }) => (size === 'l' ? '50%' : '100%')};
  height: 100%;
  ${({ size }) => `
    ${media.wide(`
      padding: ${sizes[6]}px;
      ${size === 'l' ? 'padding-right: 0;' : ''}
    `)}
    ${media.base(`
      padding: ${sizes[4]}px;
      ${size === 'l' ? 'padding-right: 0;' : ''}
    `)}
  `}
  ${media.mobile(`
    padding: ${sizes[4]}px;
    width: 100%;
  `)}
`

const StyledDescription = styled(Text)`
  opacity: 0.8;
`

const StyledLabel = styled.span`
  position: relative;
  width: auto;
  padding: ${sizes[1]}px ${sizes[2]}px;
`

const StyledLabelOverlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.black};
  opacity: 0.05;
  border-radius: ${borderRadiuses.medium};
`

const StyledCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  ${media.wide(`
    padding: ${sizes[6]}px;
  `)}
  ${media.base(`
    padding: ${sizes[4]}px;
  `)}
  ${media.mobile(`
    padding: ${sizes[4]}px;
  `)}
`

/**
 * Промо карточка. Картинка должна быть квадратным PNG. Позиционируется в правый нижний угол
 * в режиме `contain`. В мобильной версии опускается на 5% высоты карточки вниз.
 */
const PromoCard = ({
  size,
  title,
  description,
  label,
  caption,
  image,
  ...rest
}) => {
  return (
    <StyledContainer size={size} {...rest}>
      {image && <StyledImageContainer image={image} size={size} />}
      <StyledOverlay />
      <StyledContent size={size}>
        <Text
          color="inherit"
          preset="header4"
          baseProps={{ preset: 'header5' }}
          mobileProps={{ preset: 'header5' }}
        >
          {title}
        </Text>
        {description && (
          <>
            <Separator height={2} />
            <StyledDescription
              color="inherit"
              baseProps={{ preset: 'caption' }}
            >
              {description}
            </StyledDescription>
          </>
        )}
        {label && (
          <>
            <Separator height={2} />
            <StyledLabel>
              <StyledLabelOverlay />
              <Text color="inherit" preset="caption">
                {label}
              </Text>
            </StyledLabel>
          </>
        )}
      </StyledContent>
      <StyledCaption>
        <Text preset="link" color="inherit">
          {caption}
        </Text>
      </StyledCaption>
    </StyledContainer>
  )
}

PromoCard.defaultProps = {
  size: 'm',
  description: null,
  label: null,
  image: null,
}

PromoCard.propTypes = {
  /** Размер карточки */
  size: PropTypes.oneOf(['l', 'm', 's']),
  /** Заголовок */
  title: PropTypes.string.isRequired,
  /** Описание  */
  description: PropTypes.string,
  /** Строка с ценой */
  label: PropTypes.string,
  /** Описание действия при клике */
  caption: PropTypes.string.isRequired,
  /** Ссылка на картинку */
  image: PropTypes.string,
}

export default PromoCard
