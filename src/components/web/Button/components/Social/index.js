import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Color from 'color'

import messenger from './images/messenger.svg'
import telegram from './images/telegram.svg'
import viber from './images/viber.svg'

const Social = ({ href, children, network }) => {
  const bgColor = network === 'messenger' ? '#0084FF' : network === 'telegram' ? '#2CA5E0' : '#7C529E'
  const bgImage = network === 'messenger' ? messenger : network === 'telegram' ? telegram : viber

  const styles = `
    height: 50px;
    width: 190px;
    display: inline-flex;
    color: #fff;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: url('${bgImage}') no-repeat 20px center ${bgColor};
    background-size: 20px 20px;
    transition: all .25s;

    &:hover {
      background-color: ${Color(bgColor).lighten(.25).toString()}
    }
  `

  const Link = styled.a`${styles}`

  return (
    <Link href={href}>{children}</Link>
  )
}

Social.propTypes = {
  /** Тип социальной сети */
  network: PropTypes.oneOf(['messenger', 'telegram', 'viber']).isRequired,
  /** Ссылка */
  href: PropTypes.string.isRequired,
  /** Текст в кнопке */
  children: PropTypes.string
}

export default Social