import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media } from 'york-web/utils'
import { Link } from 'york-web/components/primitive'

import { menuItemShape } from './utils'

import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

import Logo from './Logo'
import QleanPlusItem from './QleanPlusItem'

const StyledMobileHeader = styled.div`
  ${media.desktop('display:none;')}
`

/**
 * Хедер с навигацией. Должен быть расположен рядом со всем контентом страницы без оберток, иначе
 * не будет работать `position: sticky`. У хедера есть свой `z-index`, который, впрочем, меньше
 * всех остальных.
 *
 * Для использования кастомных ссылок (`react-router`, `next.js`) следует передать свой компонент в
 * `components.Link`. Он должен принимать параметр `href: String`.
 *
 * Структуру пунктов меню и регионов см. в примере. Кастомные компоненты и коллбэки следует
 * прокидывать через словари `components` и `callbacks`, соответственно. Они намеренно сделаны
 * строками чтобы была возможность сериализовать и шарить весь объект `content`.
 *
 * У хедера есть несколько именованных элементов:
 * - `desktopHeaderTop` — десктопный хедер, верхняя часть с табами и профилем
 * - `desktopHeaderSticky` — десктопный хедер, залипающая часть
 * - `mobileHeader` — мобильный хедер, основное меню
 * - `mobileHeaderModal` — мобильный хедер, бургерное меню
 */
export default function Header({ components, ...rest }) {
  const props = {
    components: {
      Link,
      Logo,
      QleanPlusItem,
      ...components,
    },
    ...rest,
  }
  return (
    <>
      <DesktopHeader {...props} />
      <StyledMobileHeader>
        <MobileHeader {...props} />
      </StyledMobileHeader>
    </>
  )
}

Header.defaultProps = {
  selectedLevelOneItem: null,
  selectedLevelTwoItem: null,
  selectedProfileItem: null,
  selectedRegion: null,
  phone: null,
  callbacks: {},
  components: {},
}

Header.propTypes = {
  /** Доступен ли профиль и логин */
  isProfileAvailable: PropTypes.bool.isRequired,
  /** Залогинен ли пользоватеть */
  isLoggedIn: PropTypes.bool.isRequired,
  /** Является ли пользователь подписчиком Qlean Плюс */
  isPlusSubscriber: PropTypes.bool.isRequired,
  /** Открытая по умолчанию вкладка */
  defaultTab: PropTypes.string.isRequired,
  /** Выбранный пункт в меню первого уровня */
  selectedLevelOneItem: PropTypes.string,
  /** Выбранный пункт в меню второго уровня */
  selectedLevelTwoItem: PropTypes.string,
  /** Выбранный пункт в меню профиля */
  selectedProfileItem: PropTypes.string,
  /** Выбранный регион */
  selectedRegion: PropTypes.string,
  /** Телефон */
  phone: PropTypes.string,
  /**
   * Словарь коллбэков. По умолчанию поддерживает:
   *
   * - `onLogin` — вызывается по клику на «Войти». Обязателен, если `isProfileAvailable` равен `true`.
   * - `onRegionChange` — вызывается при смене региона с аргументом `value: String`. Обязателен, если
   * `selectedRegion` задан.
   */
  callbacks: PropTypes.objectOf(PropTypes.func.isRequired),
  /**
   * Словарь компонентов. По умолчанию содержит:
   *
   * - `Link` — стандартный `Link` из `york-web`
   * - `Logo` — логотип Qlean
   * - `QleanPlusItem` — компонент для пункта меню «Qlean Плюс»
   * */
  components: PropTypes.objectOf(PropTypes.elementType.isRequired),
  /** Содержимое хедера */
  content: PropTypes.shape({
    /** Список регионов */
    regions: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    /** Табы и основное меню */
    tabs: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    /** Меню профиля */
    profile: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  }).isRequired,
}
