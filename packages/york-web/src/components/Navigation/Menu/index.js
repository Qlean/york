import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import colors from '@qlean/york-core/lib/styles/colors';

import { media } from 'utils/styles';

import { Separator, Text } from 'components/ui';
import { FlexBase } from 'components/flex';

import FloatingMenu from './FloatingMenu';
import MenuItem from './MenuItem';
import { presets } from '../utils';

const StyledFloatingMenu = styled(FloatingMenu)``;

const StyledMenuWrapper = styled.div`
  ${({ isMenuOpened }) => `
    ${media.mobile(`
      padding-top: 60px;
      transition: top .2s ease, opacity .4s ease;
      position: fixed;
      top: ${isMenuOpened ? '0' : '-100%'};
      opacity: ${isMenuOpened ? '1' : '0'};
      overflow: scroll;
      height: 100%;
      left: 0;
      right: 0;
      background: ${colors.white};
    `)}
  `}
`;

const StyledMenu = styled(FlexBase)`
  height: 100%;
  padding: 0 30px;
  ${media.mobile`
    max-width: 360px;
    margin: 0 auto;
  `}


  a, a:hover {
    text-decoration: none;
  }
`;

const StyledCategoryTitle = styled(Text)`
  display: none;
  padding-top: 30px;
  padding-bottom: 10px;
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
    display: flex;
  }
`;

const StyledAdditionalServicesButton = styled(MenuItem)`
  ${media.mobile`
    display: none;
  `};
`;

const GlobalStyled = createGlobalStyle`
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
              <StyledAdditionalServicesButton
                color={presets[preset].link}
                hoverColor={presets[preset].linkHover}
              >
                {category.title}
              </StyledAdditionalServicesButton>
              <StyledFloatingMenu links={category.items}/>
            </StyledButtonContainer>
          ) : category.items.map(link => (
            <MenuItem
              key={link.title}
              href={link.href}
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
    <GlobalStyled isMenuOpened={isMenuOpened}/>
  </StyledMenuWrapper>
);

export default Menu;
