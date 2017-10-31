import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Social from './components/Social'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  componentFactory() {
    switch (this.props.type) {
      case 'social':
        return Social
    }
  }

  render() {
    const SelectedComponent = this.componentFactory()

    return (
      <SelectedComponent {...this.props} />
    )
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['social', 'primary'])
}

Button.defaultProps = {
  type: 'primary'
}