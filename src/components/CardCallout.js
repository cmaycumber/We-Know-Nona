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
  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const Title = styled(Heading)`
  margin: 1em;
`

const CardCallout = props => (
  <Wrapper>
    { props.title && <Title textAlign={'center'} level={6}>{ props.title ? props.title : 'Friendly, Smart, Efficient' }</Title> }
    <Text textAlign={'center'} size={'large'} dangerouslySetInnerHTML={{ __html: props.text }}/>
  </Wrapper>
)

export default CardCallout
