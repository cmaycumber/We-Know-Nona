import React from 'react'
import styled from 'styled-components'
import { Heading } from 'grommet';

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  // margin: 0 auto;
  width: 100%;
  background: ${props => props.theme.colors.base};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 1em 0 2em;
  margin: 0 1.5em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    max-width: 40vw;
    flex-flow: column;
  }
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
  img {
    max-width: 15vw;
    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
      max-width: 40vw;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      max-width: 90vw;
    }
    margin: 1em;
  }
`

const FooterHeading = styled(Heading)`
  color: white;
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <FooterHeading level={5}>Our Hours</FooterHeading>
      </Item>
      <Item>
        <FooterHeading level={5}>Location</FooterHeading>
      </Item>
      <Item>
        <FooterHeading level={5}>Maycumber And Associates KW</FooterHeading>
      </Item>
      <Item>
        <FooterHeading level={5}>Keller Williams Advantage III</FooterHeading>
      </Item>
      <Item>
        <FooterHeading level={5}>Top Real Estate Proffesionals</FooterHeading>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
