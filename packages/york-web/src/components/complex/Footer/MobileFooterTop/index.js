import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { flatten } from 'ramda'

import { sizes, media } from 'york-web/utils'

import { Text, Link } from 'york-web/components/primitive'
import {
  Accordion,
  GridContainer,
  GridColumn,
} from 'york-web/components/simple'

const StyledMobileFooterTop = styled(GridContainer)`
  display: none;
  ${media.mobile(`
    display: block;
  `)}
`

const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${sizes[2]}px 0;
  padding-left: ${sizes[4]}px;
  user-select: none;
`

const mobileMenuItems = topLinks =>
  flatten(topLinks)
    .reduce(
      (acc, item) =>
        item.items && !item.title ? [...acc, ...item.items] : [...acc, item],
      [],
    )
    .map(({ title, items }) => {
      const content = items
        ? items.map(itemItem => (
            <StyledMenuItem>
              <Text color="grey">
                <Link rank={2} backdropColor="dark">
                  {itemItem.title}
                </Link>
              </Text>
            </StyledMenuItem>
          ))
        : null
      return {
        title: (
          <Link rank={2} backdropColor="dark">
            {title}
          </Link>
        ),
        content: content ? <>{content}</> : null,
      }
    })

const MobileFooterTop = ({ content }) => {
  return (
    <StyledMobileFooterTop>
      <GridColumn columns={12}>
        <Accordion items={mobileMenuItems(content)} />
      </GridColumn>
    </StyledMobileFooterTop>
  )
}

MobileFooterTop.propTypes = {
  content: PropTypes.object.isRequired,
}

export default MobileFooterTop
