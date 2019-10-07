import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { flatten } from 'ramda'

import { View, Separator, Text, Link } from 'york-web/components/primitive'
import { GridContainer, GridColumn } from 'york-web/components/simple'
import { sizes } from 'york-web/utils'

import SocialButton from '../SocialButton'
import Accordion from '../Accordion'

const StyledFooterTop = styled.div``
const StyledFooterBottom = styled.div`
  background-color: ${colors.coal};
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

const SocialNetworks = () => (
  <View>
    {['facebook', 'vk', 'instagram'].map(slug => (
      <>
        <SocialButton size="s" slug={slug} />
        <Separator width={2} />
      </>
    ))}
  </View>
)

const topLinks = [
  [
    {
      title: 'Уборка',
      items: [
        {
          title: 'Поддерживающая',
          href: '',
        },
        {
          title: 'Генеральная',
          href: '',
        },
        {
          title: 'После ремонта',
          href: '',
        },
        {
          title: 'Загородные дома',
          href: '',
        },
        {
          title: 'Мытье окон',
          href: '',
        },
        {
          title: 'Химчистка мебели',
          href: '',
        },
      ],
    },
  ],
  [
    {
      title: 'Химчистка',
      items: [
        {
          title: 'Шторы',
          href: '',
        },
        {
          title: 'Кроссовки',
          href: '',
        },
      ],
    },
  ],
  [
    {
      title: 'Qlean Plus',
      href: '',
    },
    {
      title: 'Переезды',
      href: '',
    },
    {
      title: 'Хранение',
      href: '',
    },
    {
      title: 'Стирка и глажка',
      href: '',
    },
    {
      title: 'Уборка офисов',
      href: '',
    },
  ],
  [
    {
      items: [
        {
          title: 'Вопросы',
          href: '',
        },
        {
          title: 'Цены на уборку',
          href: '',
        },
        {
          title: 'Отзывы',
          href: '',
        },
        {
          title: 'Стать клинером',
          href: '',
        },
        {
          title: 'Вакансии',
          href: '',
        },
      ],
    },
  ],
]

const mobileMenuItems = flatten(topLinks)
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

const Footer = ({
  legalInfo,
  phones,
  email,
  userAgreementLink,
  mobileStoreLinks,
  socialNetworkLinks,
}) => {
  return (
    <>
      <Accordion items={mobileMenuItems} />
      <StyledFooterTop>
        <Separator height={12} />
        <GridContainer>
          {topLinks.map(column => (
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
      </StyledFooterTop>
      <StyledFooterBottom>
        <Separator height={12} />
        <GridContainer>
          <GridColumn columns={12}>
            <View>
              <div>
                <Text color="grey">{legalInfo}</Text>
                <Separator />
                <Text>
                  <Link rank={2} backdropColor="dark" href={`mailto:${email}`}>
                    {email}
                  </Link>
                </Text>
              </div>
              <Separator width={8} />
              {phones.length > 0 && (
                <>
                  <div>
                    {phones.map(phone => (
                      <>
                        <Text>
                          <Link
                            key={phone}
                            rank={2}
                            backdropColor="dark"
                            href={`tel:${phone}`}
                          >
                            {phone}
                          </Link>
                        </Text>
                        <Separator />
                      </>
                    ))}
                  </div>
                  <Separator width={8} />
                </>
              )}
              <div>
                <Text>
                  <Link rank={2} backdropColor="dark" href="">
                    Карта сайта
                  </Link>
                </Text>
                <Separator />
                <Text>
                  <Link rank={2} backdropColor="dark" href={userAgreementLink}>
                    Пользовательское соглашение
                  </Link>
                </Text>
              </div>
            </View>
          </GridColumn>
        </GridContainer>
        <Separator height={8} />
        <GridContainer>
          <GridColumn columns={12}>
            <View alignItems="center">
              <Text color="grey">Напишите нам:</Text>
              <Separator width={3} />
              {Object.keys(socialNetworkLinks).map(slug => (
                <>
                  <SocialButton slug={slug} size="m" backdropColor="dark" />
                  <Separator width={2} />
                </>
              ))}
            </View>
          </GridColumn>
        </GridContainer>
        <Separator height={12} />
      </StyledFooterBottom>
    </>
  )
}

Footer.defaultProps = {
  phones: [],
  mobileStoreLinks: {},
  socialNetworkLinks: {},
}

Footer.propTypes = {
  legalInfo: PropTypes.string.isRequired,
  phones: PropTypes.arrayOf(PropTypes.string.isRequired),
  email: PropTypes.string.isRequired,
  userAgreementLink: PropTypes.string.isRequired,
  mobileStoreLinks: PropTypes.objectOf(PropTypes.string.isRequired),
  socialNetworkLinks: PropTypes.objectOf(PropTypes.string.isRequired),
}

export default Footer
