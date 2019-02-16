import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Heading, Text } from 'grommet'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
  // margin-top: 2em;
  // margin-bottom: 2em;
`
const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  height: ${props => props.height || '70vh'};
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
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

const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 300px;
  height: 100%;
  @media all and (max-width: ${props => props.theme.responsive.small}) {
    align-items: center;
  }
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em;
  border-radius: 0.2em;
  padding-bottom: 5em;
  width: 50%;
  color: white;
  height: auto;
  @media all and (max-width: ${props => props.theme.responsive.medium}) {
    text-align: center;
    margin: 0em;
    width: 100%;
    align-items: center;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 100%;
`

const MiniHero = props => (
  <Wrapper>
    <BgImg
      height={props.height}
      fluid={props.image.fluid}
      backgroundColor={'#eeeeee'}
    />
    <Overlay />
    <ContentWrapper>
      <ContentBox>
        <Heading margin={'small'} level={1}>
          {props.title ? props.title : 'Live'}
        </Heading>
        <Text margin={'small'}>
          {props.tagline ? props.tagline : 'The Lake Nona life'}
        </Text>
      </ContentBox>
    </ContentWrapper>
  </Wrapper>
)

export default MiniHero
