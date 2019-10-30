import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { media, sizes, borderRadiuses, uiPoint } from 'york-web/utils'
import { Separator, Text } from 'york-web/components/primitive'

const networks = {
  facebook: {
    title: 'Facebook',
    icons: {
      // darkBackdrop: require('./assets/facebookSilver.svg'),
      // whiteBackdrop: require('./assets/facebookAsh.svg'),
    },
  },
  messenger: {
    title: 'FB Messenger',
    icons: {
      // darkBackdrop: require('./assets/messengerSilver.svg'),
      // whiteBackdrop: require('./assets/messengerAsh.svg'),
    },
  },
  telegram: {
    title: 'Telegram',
    icons: {
      // darkBackdrop: require('./assets/telegramSilver.svg'),
      // whiteBackdrop: require('./assets/telegramAsh.svg'),
    },
  },
  viber: {
    title: 'Viber',
    icons: {
      // darkBackdrop: require('./assets/viberSilver.svg'),
      // whiteBackdrop: require('./assets/viberAsh.svg'),
    },
  },
  vk: {
    title: 'Вконтакте',
    icons: {
      // darkBackdrop: require('./assets/vkSilver.svg'),
      // whiteBackdrop: require('./assets/vkAsh.svg'),
    },
  },
  instagram: {
    title: 'Instagram',
    icons: {
      // darkBackdrop: require('./assets/instagramSilver.svg'),
      // whiteBackdrop: require('./assets/instagramAsh.svg'),
    },
  },
}

const buttonSize = sizes[8]
const buttonSizes = {
  s: {
    borderRadius: `${buttonSize / 2}px`,
    width: `${buttonSize}px`,
  },
  m: {
    borderRadius: borderRadiuses.round,
    width: `${uiPoint * 32}px`,
  },
}

const StyledSocialButton = styled.a`
  outline: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${buttonSize}px;
  width: ${({ size }) => buttonSizes[size].width};
  border-radius: ${({ size }) => buttonSizes[size].borderRadius};
  background-color: ${({ backdropColor }) =>
    backdropColor === 'dark' ? colors.ash : colors.whisper};

  ${media.mobile(`
    width: 100%;
  `)}
`

const SocialButton = ({ slug, href, size, backdropColor }) => {
  const { icons, title } = networks[slug]
  return (
    <StyledSocialButton href={href} size={size} backdropColor={backdropColor}>
      <img src={icons[`${backdropColor}Backdrop`]} />
      {size === 'm' && (
        <>
          <Separator width={1} />
          <Text
            preset="caption"
            color={backdropColor === 'dark' ? 'silver' : 'ash'}
          >
            {title}
          </Text>
        </>
      )}
    </StyledSocialButton>
  )
}

SocialButton.defaultProps = {
  size: 'm',
  backdropColor: 'white',
}

SocialButton.propTypes = {
  slug: PropTypes.oneOf(Object.keys(networks)).isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(buttonSizes)),
  backdropColor: PropTypes.string,
}

export default SocialButton
