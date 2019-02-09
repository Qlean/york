import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ISvg from 'react-inlinesvg';

const StyledWrapper = styled.div`
  display: inline-block;
`;

const StyledSvg = styled(ISvg)`
  &,
  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export default class Svg extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  }

  render() {
    const {
      src,
      width,
      height,
      ...rest
    } = this.props;

    return (
      <StyledWrapper style={{ width, height }}>
        <StyledSvg src={src} {...rest}/>
      </StyledWrapper>
    );
  }
}
