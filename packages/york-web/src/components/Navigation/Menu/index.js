import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '@qlean/york-core';

import { g, media, borderRadiuses } from 'utils/styles';
import { menuItemsShape } from 'utils/propTypes';

import { Separator, Text } from 'components/ui';
import { FlexBase } from 'components/flex';

import FloatingMenu from './FloatingMenu';
import MenuItem from './MenuItem';
import { presets } from '../utils';

const StyledFloatingMenu = styled(FloatingMenu)``;

const StyledMenuWrapper = styled.div`
  ${({ isMenuOpened }) => `
    ${media.mobile(`
      height: 100%;
      overflow: scroll;
      position: fixed;
      left: 0;
      right: 0;
      top: ${isMenuOpened ? '0' : '-100%'};
      opacity: ${isMenuOpened ? '1' : '0'};
      padding-top: ${g(12)}px;
      transition: top .2s ease, opacity .4s ease;
      background: ${colors.white};
    `)}
  `}
`;

const StyledMenu = styled(FlexBase)`
  height: 100%;
  padding: 0 ${g(6)}px;

  ${media.mobile(`
    max-width: ${g(72)}px;
    margin: 0 auto;
  `)}

  a, a:hover {
    text-decoration: none;
  }
`;

const StyledCategoryTitle = styled(Text)`
  display: none;
  padding-top: ${g(6)}px;
  padding-bottom: ${g(2)}px;
  ${media.mobile`
    display: block;
  `};
`;

const StyledButtonContainer = styled.div`
  position: relative;

  ${media.desktop(`
    height: 100%;
    display: flex;
    align-items: center;
  `)}

  &:hover > ${StyledFloatingMenu} {
    clip: initial;
    width: initial;
    height: initial;
    margin: initial;
  }
`;

const StyledHoverButton = styled(MenuItem)`
  ${media.mobile`
    display: none;
  `};
`;

const StyledFloatingLink = styled(MenuItem)`
  ${media.desktop(`
    padding-right: ${g(6)}px;
    &:hover {
      border-radius: ${borderRadiuses.small};
      background: ${colors.smoke};
      color: ${colors.coal};
    }
  `)}
`;

const GlobalStyle = createGlobalStyle`
  body {
    ${({ isMenuOpened }) => (isMenuOpened ? `
      ${media.mobile`
        overflow: hidden;
        width: 100%;
        height: 100%;
      `}
    ` : '')};
  }
`;

const Menu = ({ isMenuOpened, menuItems, preset }) => (
  <StyledMenuWrapper isMenuOpened={isMenuOpened}>
    <StyledMenu
      alignItems="center"
      alignItemsMobile="flex-start"
      flexDirectionMobile="column"
    >
      {menuItems.map(category => (
        <Fragment key={category.title}>
          {category.isMobileTitleHidden || (
            <StyledCategoryTitle preset="h5" color="grey">
              {category.title}
            </StyledCategoryTitle>
          )}
          {category.isTooltip ? (
            <StyledButtonContainer>
              <StyledHoverButton
                color={presets[preset].link}
                hoverColor={presets[preset].linkHover}
              >
                {category.title}
              </StyledHoverButton>
              <StyledFloatingMenu>
                {category.items.map(link => (
                  <StyledFloatingLink
                    LinkComponent={link.LinkComponent}
                    key={link.title}
                    href={link.href}
                    onClick={link.onClick}
                    isAuthButton={link.isAuthButton}
                  >
                    {link.title}
                  </StyledFloatingLink>
                  ))}
              </StyledFloatingMenu>
            </StyledButtonContainer>
          ) : category.items.map(link => (
            <MenuItem
              key={link.title}
              href={link.href}
              onClick={link.onClick}
              isAuthButton={link.isAuthButton}
              LinkComponent={link.LinkComponent}
              color={presets[preset].link}
              hoverColor={presets[preset].linkHover}
            >
              {link.title}
            </MenuItem>
          ))}
          <Separator width={1}/>
        </Fragment>
      ))}
    </StyledMenu>
    <GlobalStyle isMenuOpened={isMenuOpened}/>
  </StyledMenuWrapper>
);

Menu.propTypes = {
  isMenuOpened: PropTypes.bool.isRequired,
  menuItems: menuItemsShape.isRequired,
  preset: PropTypes.oneOf(Object.keys(presets)),
};

export default Menu;
