import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { media } from 'york-web/utils'

import { Separator, Text, Link } from 'york-web/components/primitive'
import { GridContainer, GridColumn } from 'york-web/components/simple'

const StyledDesktopFooterTop = styled.div`
  background-color: ${colors.white};
  ${media.mobile(`
    display: none;
  `)}
`

const DesktopFooterTop = ({ content }) => {
  return (
    <StyledDesktopFooterTop>
      <Separator height={12} />
      <GridContainer>
        {content.map(column => (
          <GridColumn columns={3}>
            {column.map(({ title, items }) => (
              <>
                {title && (
                  <>
                    <Text preset="textStrong">
                      <Link rank={2}>{title}</Link>
                    </Text>
                    <Separator height={2} />
                  </>
                )}
                {items &&
                  items.map(item => (
                    <>
                      <Text>
                        <Link rank={2} backdropColor="dark">
                          {item.title}
                        </Link>
                      </Text>
                      <Separator height={2} />
                    </>
                  ))}
              </>
            ))}
          </GridColumn>
        ))}
      </GridContainer>
      <Separator height={12} />
    </StyledDesktopFooterTop>
  )
}

DesktopFooterTop.propTypes = {
  content: PropTypes.object.isRequired,
}

export default DesktopFooterTop
