import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Heading, Text } from 'grommet';

const Listing = styled.li`
  position: relative;
  margin: 0 0 1em 0;
  width: 100%;
  display: flex;
  text-align: center;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    // background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '50%' : '90%')};
      }
    }
  }
`

const Title = styled(Heading)`
  text-transform: capitalize;
  margin: .5rem 1rem .5rem 1rem;
`

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  padding: .2rem;
`

const Excerpt = styled(Text)`
  margin: 0 1rem .5rem 1rem;
`

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const ListingCard = ({ slug, heroImage, title, publishDate, body, baths, beds, price, ...props }) => {
  return (
    <Listing>
      <Link to={`/listings/${slug}/`}>
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
        <Title level={4}>{title}</Title>
        <Info>
          { (price !== 0) && <InfoWrapper>
            <Heading color={'#5d5d5d'} level={5}>{'Price: '}</Heading>
            <Text size={'small'}>{price}</Text>
          </InfoWrapper> }
          { beds && <InfoWrapper>
            <Heading color={'#5d5d5d'} level={5}>{'Bed: '}</Heading>
            <Text size={'small'}>{beds}</Text>
          </InfoWrapper> }
          { baths && <InfoWrapper>
            <Heading color={'#5d5d5d'} level={5}>{'Bath: '}</Heading>
            <Text size={'small'}>{baths}</Text>
          </InfoWrapper> }
        </Info>
        <Excerpt size={'small'}
          textAlign={'center'}
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Listing>
  )
}

export default ListingCard
