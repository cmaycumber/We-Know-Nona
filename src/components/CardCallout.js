import React from 'react'
import styled from 'styled-components'
import { Text, Heading } from 'grommet';

const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5em 0em;
  flex-direction: column;
`

const Title = styled(Heading)`
  margin: 1em;
`

const CardCallout = props => (
  <Wrapper>
    { props.title && <Title textAlign={'center'} level={6}>{ props.title ? props.title : 'Friendly, Smart, Efficient' }</Title> }
    <Text textAlign={'center'} size={'large'}>{props.text ? props.text : 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</Text>
  </Wrapper>
)

export default CardCallout
