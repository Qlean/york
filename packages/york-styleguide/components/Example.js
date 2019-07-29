import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as R from 'ramda'

import { colors } from '@qlean/york-core'
import { Text, View, Separator, sizes, media } from '@qlean/york-web'

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
  ${({ width, height }) => `
    width: ${R.isNil(width) ? sizes[8] : sizes[width]}px;
    height: ${R.isNil(height) ? sizes[8] : sizes[height]}px;
  `}
`

const StyledText = styled(Text)`
  color: ${colors.white};
`

const Box = ({ children, ...rest }) => {
  return (
    <StyledBox {...rest}>
      <StyledText>{children}</StyledText>
    </StyledBox>
  )
}

Box.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
}

const StyledLabel = styled.label`
  user-select: none;
`

const Checkbox = ({ value, children, onChange }) => (
  <StyledLabel>
    <input type="checkbox" checked={value} onChange={onChange} />
    <Text>{children}</Text>
  </StyledLabel>
)

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const StyledInputGroup = styled.div`
  display: flex;
  margin-bottom: ${sizes[2]}px;
  & > *:not(:last-child) {
    ${media.desktop(`margin-right: ${sizes[2]}px;`)}
    ${media.mobile(`margin-bottom: ${sizes[1]}px;`)}
  }
  ${media.mobile('flex-direction: column;')}
`

const itemMargin = sizes[4]

const StyledShowcase = styled(View)`
  margin: 0 -16px;
  ${({ withVerticalPadding, backgroundColor, overflow }) => `
    padding: ${withVerticalPadding ? '15px' : 0} 16px;  
    background-color: ${colors[backgroundColor]};
    overflow: ${overflow};
  `}
`

const StyledShowcaseContent = styled(View)`
  flex-wrap: wrap;
  margin: 0 0 -${itemMargin}px -${itemMargin}px;
  width: calc(100% + ${itemMargin}px);
`

const Showcase = ({
  backgroundColor,
  withVerticalPadding,
  overflow,
  ...rest
}) => (
  <StyledShowcase
    backgroundColor={backgroundColor}
    withVerticalPadding={withVerticalPadding}
    overflow={overflow}
  >
    <StyledShowcaseContent {...rest} />
  </StyledShowcase>
)

Showcase.propTypes = {
  backgroundColor: PropTypes.oneOf(Object.keys(colors)),
  withVerticalPadding: PropTypes.bool,
  overflow: PropTypes.string,
}

Showcase.defaultProps = {
  backgroundColor: 'white',
  withVerticalPadding: false,
  overflow: 'visible',
}

const StyledShowcaseItem = styled.div`
  box-sizing: border-box;
  padding: 0 0 ${itemMargin}px ${itemMargin}px;
`

const ShowcaseItem = ({ title, titleProps, caption, children, ...rest }) => (
  <StyledShowcaseItem {...rest}>
    <Text htmlTag="div" {...titleProps}>
      {title}
    </Text>
    <Text htmlTag="div" color="grey" preset="caption">
      {caption}
    </Text>
    <Separator height={1} />
    <div>{children}</div>
  </StyledShowcaseItem>
)

ShowcaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  titleProps: PropTypes.shape(Text.propTypes.isRequired),
  caption: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ShowcaseItem.defaultProps = {
  titleProps: {},
  caption: '',
}

const StyledImage = styled.img`
  ${({ width }) => `
    width: ${width}px;
  `}
  display: block;
  max-width: 100%;
`

const Image = ({ title, ...rest }) => (
  <div>
    {title && (
      <>
        <Text>{title}</Text>
        <Separator height={1} />
      </>
    )}
    <StyledImage {...rest} />
  </div>
)

Image.defaultProps = {
  title: '',
}

Image.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
}

const text = {
  short: 'Аляскинский маламут',
  medium:
    'Аляскинский маламут — достаточно крупная собака аборигенного типа, предназначенная для работы в упряжке, одна из древнейших пород собак.',
  long:
    'Своим названием Аляскинский Маламут обязан племени Малемиутов (Малемуты, Малемьюты). Малемиуты — когда-то многочисленное эскимосское племя группы Инупиатов, жившее на различных прибрежных территориях Аляски. В исторических хрониках арктических путешественников это племя чаще всего встречается в районе Залива Коцебу и в районе Залива Нортон. Исследователи Севера Америки и Канады XIX века часто сообщали о замечательных качествах рабочих собак, приобретенных у этого племени, их исключительном здоровье, физической выносливости, устойчивости к самым экстремальным погодным условиям.',
}

const options = [
  {
    label: 'Йоркширский терьер',
    value: 'york',
  },
  {
    label: 'Вельш-корги',
    value: 'corgi',
  },
  {
    label: 'Сибирский хаски',
    value: 'husky',
  },
  {
    label: 'Немецкая овчарка',
    value: 'shepherd',
  },
  {
    label: 'Австралийская короткохвостая пастушья собака',
    value: 'heeler',
  },
  {
    label: 'Аляскинский маламут',
    value: 'malamute',
  },
  {
    label: 'Самоедская собака',
    value: 'samoyed',
  },
  {
    label: 'Восточносибирская лайка',
    value: 'laika',
  },
  {
    label: 'Русская псовая борзая',
    value: 'borzoi',
  },
]

const Example = {
  Box,
  Checkbox,
  InputGroup: StyledInputGroup,
  Showcase,
  ShowcaseItem,
  Image,
  text,
  options,
}

export default Example
