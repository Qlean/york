import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Color from 'color'

import messenger from './images/messenger.png'
import telegram from './images/telegram.png'
import viber from './images/viber.png'

console.log(viber.toString())

const Social = ({ href, children, network }) => {
  const bgColor = network === 'messenger' ? '#0084FF' : network === 'telegram' ? '#2CA5E0' : '#7C529E'
  const bgImage = network === 'messenger' ? messenger : network === 'telegram' ? telegram : viber

  const Link = styled.a`
    height: 50px;
    width: 190px;
    display: inline-flex;
    color: #fff;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: url('${bgImage.toString()}') no-repeat 20px center ${bgColor};
    background-size: 20px 20px;
    transition: all .25s;
    &:hover {
      background-color: ${Color(bgColor).lighten(0.25).string()}
    }
  `

  return (
    <Link href={href}>{children}</Link>
  )
}

Social.propTypes = {
  network: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.string
}

export default Social