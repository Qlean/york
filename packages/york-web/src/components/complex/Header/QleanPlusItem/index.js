import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { View, Separator } from 'york-web/components/primitive'

const StyledPlusIcon = styled.div`
  width: 46px;
  height: 18px;
  background-size: 100%;
  background-image: url(${require('./assets/plus.png')});
`

export default function QleanPlusItem({ children }) {
  return (
    <View alignItems="center">
      {children}
      <Separator width={1} />
      <StyledPlusIcon />
    </View>
  )
}

QleanPlusItem.propTypes = {
  children: PropTypes.node.isRequired,
}
