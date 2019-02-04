import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 80%;
  }
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
