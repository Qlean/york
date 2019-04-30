import React, { Component } from 'react'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'

import { creationFormPropsShape } from 'utils/propTypes'

export const floatingFormRefNames = {
  topEdge: 'topEdge',
  bottomEdge: 'bottomEdge',
}

class FloatingFormScroller extends Component {
  static propTypes = {
    getRefHandler: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    creationFormProps: PropTypes.shape(creationFormPropsShape).isRequired,
    renderFloatingForm: PropTypes.func.isRequired,
  }

  state = {
    isFloatingFormVisible: false,
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onThrottledScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onThrottledScroll)
  }

  onScroll = () => {
    const { getRefHandler } = this.props
    const bottomOrderFormRef = getRefHandler(floatingFormRefNames.bottomEdge)
    const firstScreenRef = getRefHandler(floatingFormRefNames.topEdge)
    if (firstScreenRef && bottomOrderFormRef) {
      const firstScreenBottom = firstScreenRef.getBoundingClientRect().bottom
      const topOrderFormTop = bottomOrderFormRef.getBoundingClientRect().top
      const windowHeight = document.documentElement.clientHeight
      const isFloatingFormVisible =
        topOrderFormTop > windowHeight && firstScreenBottom < 0
      if (this.state.isFloatingFormVisible !== isFloatingFormVisible) {
        this.setState({ isFloatingFormVisible })
      }
    }
  }

  onThrottledScroll = throttle(this.onScroll, 100)

  render() {
    const { creationFormProps, renderFloatingForm, children } = this.props
    const { isFloatingFormVisible } = this.state
    return (
      <div
        ref={c => {
          this.container = c
        }}
      >
        {renderFloatingForm({ isFloatingFormVisible, creationFormProps })}
        {children}
      </div>
    )
  }
}

export default FloatingFormScroller
