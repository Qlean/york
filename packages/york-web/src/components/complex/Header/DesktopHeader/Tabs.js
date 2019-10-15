import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { uiPoint, borderRadiuses } from 'york-web/utils'
import { Text, View, Link } from 'york-web/components/primitive'

import { menuItemShape } from '../utils'

const StyledTab = styled(View)`
  align-items: center;
  height: ${uiPoint * 5}px;
  padding: 0 8px;
  border-radius: ${borderRadiuses.medium};
  user-select: none;
  ${({ isSelected }) =>
    isSelected ? `background-color: ${colors.green};` : `cursor: pointer;`}
`

const StyledTabText = styled(Text)`
  font-size: 11px;
  font-weight: 700;
  line-height: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export default function Tabs({ defaultTab, tabs }) {
  return (
    <View>
      {tabs.map(({ name, title, href }) => {
        const isSelected = defaultTab === name
        return (
          <Link name={name} href={href} key={name}>
            <StyledTab key={name} isSelected={isSelected}>
              <StyledTabText color={isSelected ? 'white' : 'grey'}>
                {title}
              </StyledTabText>
            </StyledTab>
          </Link>
        )
      })}
    </View>
  )
}

Tabs.propTypes = {
  defaultTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
}
