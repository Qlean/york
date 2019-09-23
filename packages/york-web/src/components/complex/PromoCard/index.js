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
  background: ${({ background }) => background};
  color: ${({ color }) => color};
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
`

const StyledImageContainer = styled.div`
  position: absolute;
  top: ${({ size }) => (size === 'l' ? 0 : '50%')};
  right: 0;
  bottom: 0;
  left: ${({ size }) => (size === 'l' ? '50%' : 0)};
  background-image: url(${({ image }) => image});
  background-position: ${({ size }) => (size === 'l' ? 'right bottom' : 'top')};
  background-repeat: no-repeat;
  background-size: contain;

  ${({ size }) => `
    ${media.wide(`
      padding: ${sizes[6]}px;
    `)}
    ${media.base(`
      padding: ${sizes[5]}px;
    `)}
    ${media.mobile(`
      top: ${size === 'l' ? '25%' : '40%'};
      right: 0;
      bottom: 0;
      left: 0;
    `)}
  `}
`

const StyledContent = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ size }) => (size === 'l' ? '50%' : '100%')};
  height: 100%;

  ${media.wide(`
    padding: ${sizes[6]}px;
    padding-right: 0;
  `)}
  ${media.base(`
    padding: ${sizes[4]}px;
    padding-right: 0;
  `)}
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
  border-radius: ${borderRadiuses.small};
`

const StyledLabelOverlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.black};
  opacity: 0.05;
`

const StyledAction = styled.div`
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

const StyledButtonWrapper = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;

  &:hover ${StyledOverlay} {
    opacity: 1;
  }

  &:focus ${StyledOverlay} {
    opacity: 1;
  }
`

const StyledLinkWrapper = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  color: inherit;
  cursor: pointer;

  &:hover ${StyledOverlay} {
    opacity: 1;
  }

  &:focus ${StyledOverlay} {
    opacity: 1;
  }
`

const Wrapper = ({ name, href, onClick, children }) => {
  if (href)
    return (
      <StyledLinkWrapper name={name} href={href}>
        {children}
      </StyledLinkWrapper>
    )
  if (onClick)
    return (
      <StyledButtonWrapper name={name} onClick={onClick}>
        {children}
      </StyledButtonWrapper>
    )
  return children
}

Wrapper.defaultProps = {
  href: null,
  onClick: null,
}

Wrapper.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

/** Промо карточка. Семантически может быть кнопкой или ссылкой. Если передан проп `href`, то проп `onClick` не сработает. */
const PromoCard = ({
  name,
  size,
  title,
  description,
  label,
  caption,
  background,
  textColor,
  image,
  href,
  onClick,
}) => {
  return (
    <StyledContainer color={textColor} background={background} size={size}>
      <Wrapper name={name} href={href} onClick={onClick}>
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
        <StyledAction>
          <Text preset="link" color="inherit">
            {caption}
          </Text>
        </StyledAction>
      </Wrapper>
    </StyledContainer>
  )
}

PromoCard.defaultProps = {
  size: 'l',
  description: null,
  label: null,
  image: null,
  href: null,
  onClick: null,
}

PromoCard.propTypes = {
  /** Имя карточки */
  name: PropTypes.string.isRequired,
  /** Размер карточки */
  size: PropTypes.oneOf(['l', 'm', 's']),
  /** Заголовок */
  title: PropTypes.string.isRequired,
  /** Описание  */
  description: PropTypes.string,
  /** Строка с ценой */
  label: PropTypes.string,
  /** Строка, описывающая действите, которое произойдет при клике по карточке */
  caption: PropTypes.string.isRequired,
  /** Фон - валидная строка для css свойства `background`. В будущем будут гайдовые фоны */
  background: PropTypes.string.isRequired,
  /** Цвет текста. В будущем будет зависить от фона */
  textColor: PropTypes.oneOf(Object.keys(colors)).isRequired,
  /** Картинка. Позиционируется в зависимости от размера карточки и медиа брейкпойнта */
  image: PropTypes.string,
  /** Ссылка */
  href: PropTypes.string,
  /** Функция, вызываемая при клике по карточке. Не вызывается, если указана ссылка. */
  onClick: PropTypes.func,
}

export default PromoCard
