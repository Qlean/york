import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ISvg from 'react-inlinesvg';

const StyledWrapper = styled.div`
  display: inline-block;
`;

const StyledSvg = styled(ISvg)`
  &,
  > svg {
    width: 100%;
    height: 100%;
  }
`;

export default class Svg extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }

  render() {
    const {
      src,
      width,
      height,
      // className,
      // wrapperClassName,
      ...rest
    } = this.props;

    return (
      <StyledWrapper
        style={{ width, height }}
        // className={cn('body', wrapperClassName)}
      >
        <StyledSvg
          src={src}
          // className={cn('wrapper', className)}
          {...rest}
        />
      </StyledWrapper>
    );
  }
}
