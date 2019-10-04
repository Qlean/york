import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { formatPhone, formatPhoneHref } from '@qlean/york-core'

import { Text, Link } from 'york-web/components/primitive'

const StyledPhoneText = styled(Text)`
  font-weight: 700;
  letter-spacing: 0.5px;
`

export default function Phone({ phone }) {
  return (
    <Link name="phone" href={formatPhoneHref(phone)}>
      <StyledPhoneText preset="caption">{formatPhone(phone)}</StyledPhoneText>
    </Link>
  )
}

Phone.propTypes = {
  phone: PropTypes.string.isRequired,
}
