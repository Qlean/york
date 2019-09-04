import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { sizes, borderRadiuses } from 'york-web/utils'
import { Text, View, Link } from 'york-web/components/primitive'

const StyledTab = styled(View)`
  height: 24px;
  padding: 0 8px;
  border-radius: ${borderRadiuses.medium};
  user-select: none;
  ${({ isSelected }) =>
    isSelected ? `background-color: ${colors.green};` : `cursor: pointer;`}
`

const StyledTabText = styled(Text)`
  font-size: 11px;
  line-height: ${sizes[4]}px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export default function DesktopHeader({ defaultTab, content: { tabs } }) {
  return (
    <View>
      {tabs.map(({ name, title, href }) => {
        const isSelected = defaultTab === name
        return (
          <Link rank={0} href={href} key={name}>
            <StyledTab key={name} isSelected={isSelected} alignItems="center">
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
