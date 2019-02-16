import React from 'react'
import styled from 'styled-components'
import { Text, Heading } from 'grommet'

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 2em 8em 2em;
`

const Name = styled(Text)`
  font-style: italic;
`

const CustomerReview = props => (
  <Wrapper>
    <Heading margin={'small'} level={4}>
      What Are Clients Have to Say
    </Heading>
    <Text margin={'small'} textAlign={'center'} size={'medium'}>
      {props.text
        ? props.text
        : '"Thanks to the Maycumber team for all their help!  They sold our house (in 6 days!), helped us find a temporary rental and helped us find and build our new house. They worked tirelessly to meet our every need."'}
    </Text>
    <Name size={'small'}>{' - Myron Ascher'}</Name>
  </Wrapper>
)

export default CustomerReview
