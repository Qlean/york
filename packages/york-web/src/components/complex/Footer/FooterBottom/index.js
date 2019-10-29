import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, formatPhone, formatPhoneHref } from '@qlean/york-core'

import { View, Separator, Text, Link } from 'york-web/components/primitive'
import {
  GridContainer,
  GridColumn,
  SocialButton,
} from 'york-web/components/simple'
import { media } from 'york-web/utils'

const StyledFooterBottom = styled.div`
  background-color: ${colors.coal};
`

const StyledComma = styled(Text)`
  ${media.desktop(`
    display: none;
  `)}
`

const Comma = () => <StyledComma color="grey">{',\u00a0'}</StyledComma>

const FooterBottom = ({
  legalInfo,
  phones,
  email,
  userAgreementLink,
  socialNetworkLinks,
}) => {
  return (
    <StyledFooterBottom>
      <Separator height={12} />
      <GridContainer>
        <GridColumn
          columns={12}
          flexDirection="row"
          flexWrap="wrap"
          mobileProps={{ flexDirection: 'column', alignItems: 'center' }}
        >
          <View flexDirection="column" mobileProps={{ flexDirection: 'row' }}>
            <Text color="grey">{legalInfo}</Text>
            <Comma />
            <Text>
              <Link rank={2} backdropColor="dark" href={`mailto:${email}`}>
                {email}
              </Link>
            </Text>
          </View>
          <Separator width={8} mobileProps={{ height: 4 }} />
          {phones.length > 0 && (
            <>
              <View
                flexDirection="column"
                mobileProps={{ flexDirection: 'row' }}
              >
                {phones.map((phone, i) => (
                  <Text>
                    <Link
                      key={phone}
                      rank={2}
                      backdropColor="dark"
                      href={formatPhoneHref(phone)}
                    >
                      {formatPhone(phone)}
                    </Link>
                    {i !== phones.length - 1 && <Comma />}
                  </Text>
                ))}
              </View>
              <Separator width={8} mobileProps={{ height: 4 }} />
            </>
          )}
          <View flexDirection="column" alignItems="center">
            <Text>
              <Link rank={2} backdropColor="dark" href="">
                Карта сайта
              </Link>
            </Text>
            <Separator mobileProps={{ height: 4 }} />
            <Text>
              <Link rank={2} backdropColor="dark" href={userAgreementLink}>
                Пользовательское соглашение
              </Link>
            </Text>
          </View>
        </GridColumn>
      </GridContainer>
      <Separator height={8} />
      <GridContainer>
        <GridColumn
          columns={12}
          alignItems="center"
          flexDirection="row"
          mobileProps={{ flexDirection: 'column' }}
        >
          <Text color="grey">Напишите нам:</Text>
          <Separator width={3} height={4} />
          {Object.keys(socialNetworkLinks).map(slug => (
            <>
              <SocialButton slug={slug} size="m" backdropColor="dark" />
              <Separator width={2} height={2} />
            </>
          ))}
        </GridColumn>
      </GridContainer>
      <Separator height={12} />
    </StyledFooterBottom>
  )
}

FooterBottom.defaultProps = {
  phones: [],
  socialNetworkLinks: {},
}

FooterBottom.propTypes = {
  legalInfo: PropTypes.string.isRequired,
  phones: PropTypes.arrayOf(PropTypes.string.isRequired),
  email: PropTypes.string.isRequired,
  userAgreementLink: PropTypes.string.isRequired,
  socialNetworkLinks: PropTypes.objectOf(PropTypes.string.isRequired),
}

export default FooterBottom
