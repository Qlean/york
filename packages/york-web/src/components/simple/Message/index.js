import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { colors } from '@qlean/york-core'
import styled from 'styled-components'

import { sizes, uiPoint, borderRadiuses } from 'york-web/utils'
import { Text } from 'york-web/components/primitive'

const ErrorImage = require('./assets/error.svg')
const SuccessImage = require('./assets/success.svg')

const MessageWrapper = styled.div`
  background-color: ${colors.coal};
  opacity: ${props => props.opacity || 1};
  padding: ${sizes[3]}px;
  border-radius: ${borderRadiuses.small};
  min-width: 300px;
  max-width: 600px;
  cursor: pointer;
  display: inline-flex;
`

const MessageView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ErrorIcon = styled(ErrorImage)`
  width: 24px;
  height: 24px;
  margin-right: ${sizes[3]}px;
`

const SuccessIcon = styled(SuccessImage)`
  width: 24px;
  height: 24px;
  margin-right: ${sizes[3]}px;
`

const StyledText = styled(Text)`
  color: ${colors.smoke};
  flex: 1;
`

const defaultMessageObject = {
  text: '',
  icon: undefined,
  onClick: undefined,
}

const normalizeMessage = message => {
  if (typeof message === 'string') {
    return {
      ...defaultMessageObject,
      text: message,
    }
  }
  if (message instanceof Error) {
    return {
      ...defaultMessageObject,
      text: message.message,
      icon: 'error',
    }
  }
  if (typeof message === 'object') {
    return {
      ...message,
    }
  }
  return defaultMessageObject
}

const getIcon = icon => {
  switch (icon) {
    case 'error':
      return <ErrorIcon />
    case 'success':
      return <SuccessIcon />
    default:
      return null
  }
}

/**
 * Уведомление
 */
const Message = ({ message, index, count }) => {
  const { text, icon, onClick } = useMemo(() => normalizeMessage(message), [message])
  const isBehind = index < count - 1

  return (
    <MessageWrapper onClick={onClick} opacity={isBehind ? 0.8 : 1}>
      <MessageView>
        {icon && getIcon(icon)}
        <StyledText preset="caption">{text}</StyledText>
      </MessageView>
    </MessageWrapper>
  )
}

Message.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Error),
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.oneOf(['success', 'error', undefined]),
      onClick: PropTypes.func,
    }),
  ]).isRequired,
  index: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
}

export default Message
