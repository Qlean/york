import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as R from 'ramda'

import { legacyMedia, withResponsiveProps } from 'utils/styles'

const FlexBase = styled.div`
  display: flex;
  ${legacyMedia.mobile`
    flex-direction: ${({ flexDirectionMobile }) => flexDirectionMobile};
    align-items: ${({ alignItemsMobile }) => alignItemsMobile};
    justify-content: ${({ justifyContentMobile }) => justifyContentMobile};
    flex-wrap: ${({ flexWrapMobile }) => flexWrapMobile};
  `}
  ${legacyMedia.base`
    flex-direction: ${({ flexDirectionBase }) => flexDirectionBase};
    align-items: ${({ alignItemsBase }) => alignItemsBase};
    justify-content: ${({ justifyContentBase }) => justifyContentBase};
    flex-wrap: ${({ flexWrapBase }) => flexWrapBase};
  `}
  ${legacyMedia.wide`
    flex-direction: ${({ flexDirectionWide }) => flexDirectionWide};
    align-items: ${({ alignItemsWide }) => alignItemsWide};
    justify-content: ${({ justifyContentWide }) => justifyContentWide};
    flex-wrap: ${({ flexWrapWide }) => flexWrapWide};
  `}
`

const flexDirectionTypes = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
}

const alignItemsTypes = {
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  stretch: 'stretch',
}

const justifyContentTypes = {
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  spaceBetween: 'space-between',
}

const flexWrapTypes = {
  nowrap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse',
}

export default withResponsiveProps([
  {
    name: 'flexDirection',
    propType: PropTypes.oneOf(R.values(flexDirectionTypes)),
  },
  { name: 'alignItems', propType: PropTypes.oneOf(R.values(alignItemsTypes)) },
  {
    name: 'justifyContent',
    propType: PropTypes.oneOf(R.values(justifyContentTypes)),
  },
  { name: 'flexWrap', propType: PropTypes.oneOf(R.values(flexWrapTypes)) },
])(FlexBase)
