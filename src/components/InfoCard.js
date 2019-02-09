import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Text, Heading, Button } from 'grommet';
import { Link } from 'gatsby';

const Wrapper = styled.section`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  background: white;
  margin: 5em 0em;
  margin-bottom: 8em;
  @media all and (max-width: ${props => props.theme.responsive.medium}) {
    flex-direction: column;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: column;
  flex: 5;
`

const BoxWrapper = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: solid 1px #eeeeee;
  z-index: 1;
`
const Quote = styled(Text)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 25%;
  margin: 0em 0em 2em 1em;
  @media all and (max-width: ${props => props.theme.responsive.medium}) {
    flex-direction: column;
    top: 0;
    margin: 1em 0em 1em 1em;
    width: 60%;
  }
`

const SideImg = styled(Img)`
  flex: 2;
  min-height: 100%;
  z-index: 0;
  & > img {
    object-fit: contain !important;
    object-position: 50% 50% !important;
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const InfoCard = props => (
  <Wrapper>
    <SideImg fluid={props.image.fluid} height={'100%'}/>
    <Quote color={'white'} alignText={'center'} size={'xlarge'}>"This is the ultimate definition of a full service real estate firm."</Quote>
    <ContentWrapper>
      <BoxWrapper> 
        <Heading margin={'small'} level={3}>{props.titles[0]}</Heading>
        <Text margin={'small'} size={'medium'}>{props.text[0] ? props.text[0] : 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</Text>
        <Link to={'/about-the-maycumber-team/'}><Button margin={'small'} label={'About The Agents'}/></Link>
      </BoxWrapper>
      <BoxWrapper> 
        <Heading margin={'small'} level={3}>{props.titles[1]}</Heading>
        <Text margin={'small'} size={'medium'}>{props.text[1] ? props.text[1] : 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</Text>
        <Link to={'/about-the-maycumber-team/'}><Button margin={'small'} label={'About Us'}/></Link>
      </BoxWrapper>
      <BoxWrapper> 
        <Heading margin={'small'} level={3}>{props.titles[2]}</Heading>
        <Text margin={'small'} size={'medium'}>{props.text[2] ? props.text[2] : 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</Text>
        <Link to={'/listings/'}><Button margin={'small'} label={'View Our Listings'}/></Link>
      </BoxWrapper>
    </ContentWrapper>
    
  </Wrapper>
)

export default InfoCard;