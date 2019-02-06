import React, { Fragment } from 'react';
import styled from 'styled-components';
import colors from '@qlean/york-core/lib/styles/colors';

import { media } from 'utils/styles';

import { Separator, Text } from 'components/ui';
import { FlexBase } from 'components/flex';

import FloatingMenu from './FloatingMenu';
import MenuItem from './MenuItem';
import { presets } from './utils';

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

const Menu = ({ isMenuOpened, links, preset }) => (
  <StyledMenuWrapper isMenuOpened={isMenuOpened}>
    <StyledMenu
      alignItems="center"
      alignItemsMobile="flex-start"
      flexDirectionMobile="column"
      isMenuOpened={isMenuOpened}
    >
      {links.map(category => (
        <Fragment key={category.title}>
          {category.isMobileTitleHidden || (
            <StyledCategoryTitle preset="text2" color="grey">{category.title}</StyledCategoryTitle>
          )}
          {category.isTooltip
            ? (
              <StyledButtonContainer>
                <StyledAdditionalServicesButton color={presets[preset].link}>{category.title}</StyledAdditionalServicesButton>
                <StyledFloatingMenu links={category.items}/>
              </StyledButtonContainer>
            )
            : category.items.map(link => (
              <MenuItem color={presets[preset].link} key={link.title} href={link.href}>{link.title}</MenuItem>
            ))
          }
          <Separator width={1}/>
        </Fragment>
      ))}
    </StyledMenu>
  </StyledMenuWrapper>
);

export default Menu;
