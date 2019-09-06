import React, { Fragment } from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { GridContainer, GridColumn } from 'york-web/components/simple'
import { View, Separator, Text, Link } from 'york-web/components/primitive'
import SocialButton from '../SocialButton'

const StyledFooterTop = styled.div``
const StyledFooterBottom = styled.div`
  background-color: ${colors.coal};
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
  {
    items: [
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
  },
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
]

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
      <StyledFooterTop>
        <Separator height={12} />
        <GridContainer>
          {topLinks.map(({ title, items }, i) => (
            <GridColumn columns={3} key={title}>
              <Text preset="textStrong">{title}</Text>
              <Separator height={2} />
              {items.map(item => (
                <Fragment key={item.title}>
                  <Text>
                    <Link rank={2} backdropColor="dark" href={item.href}>
                      {item.title}
                    </Link>
                  </Text>
                  <Separator height={1} />
                </Fragment>
              ))}
              {i === topLinks.length - 1 && (
                <>
                  <Separator height={4} />
                  <SocialNetworks />
                </>
              )}
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
                <Text color="grey">{email}</Text>
              </div>
              <Separator width={8} />
              {phones.length > 0 && (
                <>
                  <div>
                    {phones.map(phone => (
                      <>
                        <Text key={phone} color="grey">
                          {phone}
                        </Text>
                        <Separator />
                      </>
                    ))}
                  </div>
                  <Separator width={8} />
                </>
              )}
              <div>
                <Text color="grey">Карта сайта</Text>
                <Separator />
                <Text color="grey">Пользовательское соглашение</Text>
              </div>
            </View>
          </GridColumn>
        </GridContainer>
        <Separator height={12} />
      </StyledFooterBottom>
    </>
  )
}

export default Footer
