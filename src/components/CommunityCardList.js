import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 5em 0em;
  &::after {
    content: '';
    flex: 0 0 49%;
  }
`

const CommunityCardList = props => {
  return <List>{props.children}</List>
}

export default CommunityCardList
