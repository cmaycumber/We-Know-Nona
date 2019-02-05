import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from 'grommet';
import Image1 from '../../static/logos/BetterFormatedTRP.webp';
import Image2 from '../../static/logos/BetterFormattedKW.webp';
import Image3 from '../../static/logos/BetterFormattedKWLN.webp';
import { Link } from 'gatsby';

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
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
    // max-width: 40vw;
    flex-flow: column;
  }
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
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
      max-width: 45vw;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      max-width: 60vw;
    }
    margin: 1em;
  }
`

const FooterText = styled(Text)`
  color: white;
  word-wrap: normal;
`
const Hours = styled(Text)`
  color: white;
  font-style: italic;
  margin-left: .5em;
  font-weight: bold;
`

const FooterHeading = styled(Heading)`
  color: white;
  margin-bottom: .5em;
`

const FooterLink = styled.a`
  color: white;
  margin: .5em 0em .5em 0em;
  text-decoration: none;
  max-width: 15vw;
    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
      max-width: 45vw;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      max-width: 60vw;
    }
`

const Copyright = styled(Text)`
    color: white;
    font-weight: 400;
    padding: 1em;
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <FooterHeading level={4}>Our Hours</FooterHeading>
        <FooterText>Monday: <Hours>9am to 6pm</Hours></FooterText>
        <FooterText>Tuesday: <Hours>9am to 6pm</Hours></FooterText>
        <FooterText>Wednesday: <Hours>9am to 6pm</Hours></FooterText>
        <FooterText>Thursday: <Hours>9am to 6pm</Hours></FooterText>
        <FooterText>Friday: <Hours>9am to 6pm</Hours></FooterText>
        <FooterText>Saturday: <Hours>9am to 6pm</Hours></FooterText>
        <FooterText>Sunday: <Hours>12am to 5pm</Hours></FooterText>
      </Item>
      <Item>
        <FooterHeading level={4}>Location</FooterHeading>
        <FooterLink href='https://plus.google.com/+WeknownonaKW'>
          <FooterText>
            Maycumber and Associates
            9161 Narcoossee Rd, Suite 107
            Orlando, FL 32827
            (407) 407-251-1314
          </FooterText>
        </FooterLink>
        <FooterLink href='mailto:allyn@maycumber.com'>
          <FooterText>
            Allyn@Maycumber.com
          </FooterText>
        </FooterLink>
      </Item>
      <Item>
        <FooterHeading level={4}>Maycumber And Associates KW</FooterHeading>
        <Link to='/about/'><img alt="About Maycumber and Associates" src={Image3}/></Link>
      </Item>
      <Item>
        <FooterHeading level={4}>Keller Williams Advantage III</FooterHeading>
        <Link to='/about/'><img alt="About Keller Williams Advantage" src={Image2}/></Link>
      </Item>
      <Item>
        <FooterHeading level={4}>Top Real Estate Proffesionals</FooterHeading>
        <Link to='/about/'><img alt="About the Top Real Estate Proffesionals" src={Image1}/></Link>
      </Item>
    </List>
    <Copyright>Copyright @ We Know Nona 2019</Copyright>
  </Wrapper>
)

export default Footer
