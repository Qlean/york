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

const PromoCard = ({
  name,
  size,
  title,
  description,
  priceLabel,
  actionLabel,
  background,
  textColor,
  image,
  onClick,
  href,
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
          {priceLabel && (
            <>
              <Separator height={2} />
              <StyledLabel>
                <StyledLabelOverlay />
                <Text color="inherit" preset="caption">
                  {priceLabel}
                </Text>
              </StyledLabel>
            </>
          )}
        </StyledContent>
        <StyledAction>
          <Text preset="link" color="inherit">
            {actionLabel}
          </Text>
        </StyledAction>
      </Wrapper>
    </StyledContainer>
  )
}

PromoCard.defaultProps = {
  size: 'l',
  image: null,
  href: null,
  onClick: null,
  priceLabel: null,
  description: null,
}

PromoCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['l', 'm', 's']),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  priceLabel: PropTypes.string,
  actionLabel: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  textColor: PropTypes.oneOf(Object.keys(colors)).isRequired,
  image: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
}

export default PromoCard
