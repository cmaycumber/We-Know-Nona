import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`
const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  height: ${props => props.height};
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
  height: auto;
  @media all and (max-width: ${props => props.theme.responsive.medium}) {
    text-align: center;
    margin: 0em;
    width: 100%;
    align-items: center;
  }
`

const Hero = props => (
  <Wrapper>
    <BgImg
      critical
      height={props.height}
      fluid={props.image.fluid}
      backgroundColor={'#eeeeee'}
    />
    <ContentWrapper>
      <ContentBox>{props.children}</ContentBox>
    </ContentWrapper>
  </Wrapper>
)

export default Hero
