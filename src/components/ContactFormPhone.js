import React from 'react'
import styled from 'styled-components'
import PhoneNumber from './PhoneNumber'
import { Text } from 'grommet'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  @media (max-width: ${props => props.theme.responsive.medium}) {
    flex-direction: column;
  }
`

export const ContactFormPhone = () => {
  return (
    <Wrapper>
      <Text margin={'small'}>Give us a call at </Text>
      <PhoneNumber />
      <Text margin={'small'}> or contact us below</Text>
    </Wrapper>
  )
}

export default ContactFormPhone
