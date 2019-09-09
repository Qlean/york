import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Separator } from 'york-web/components/primitive'

const StyledPlusIcon = styled.div`
  width: 46px;
  height: 18px;
  background-size: 100%;
  background-image: url(${require('./assets/plus.png')});
`

export default function QleanPlusItem({ children }) {
  return (
    <>
      {children}
      <Separator width={1} />
      <StyledPlusIcon />
    </>
  )
}

QleanPlusItem.propTypes = {
  children: PropTypes.node.isRequired,
}
