import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import ListingCard from '../components/ListingCard'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import Hero from '../components/Hero'
import CardCallout from '../components/CardCallout'
import InfoCard from '../components/InfoCard'
import ListingCards from '../components/ListingCards'
import { Button, Heading } from 'grommet'
import CustomerReview from '../components/CustomerReview'
import MiniHero from '../components/MiniHero'
import PageBody from '../components/PageBody'
import styled from 'styled-components'

const HeroButton = styled(Button)`
  padding: 0.5em 2em;
  font-size: 1.2em;
`

const Index = ({ data, pageContext }) => {
  console.log(data)
  const listings = data.allContentfulListing.edges
  const home = data.contentfulHomepage
  const featuredPost = listings[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - The Premier Lake Nona Real Estate Team`}</title>
        </Helmet>
      )}
      <Hero height={'100vh'} image={home.heroImage}>
        <Heading
          textAlign={'center'}
          margin={'medium'}
          color={'#e1e1e1'}
          level={1}
        >
          {home.mainHeroHeader}
        </Heading>
        <Link to={'/listings/'}>
          <HeroButton primary margin={'medium'} label={'View Listings'} />
        </Link>
      </Hero>
      <Container>
        <CardCallout
          text={home.cardCalloutParagraph.childMarkdownRemark.html}
          title={home.cardCalloutTitle}
        />
        <InfoCard
          text={[
            home.infoCardParagraph1.childMarkdownRemark.html,
            home.infoCardParagraph2.childMarkdownRemark.html,
            home.infoCardParagraph3.childMarkdownRemark.html,
          ]}
          titles={[
            home.infoCardTitle1,
            home.infoCardTitle2,
            home.infoCardTitle3,
          ]}
          image={home.infoCardPicture}
        />
        <ListingCards>
          <ListingCard {...featuredPost} />
          {listings.slice(1).map(({ node: listings }, i) => (
            <ListingCard key={i} {...listings} />
          ))}
        </ListingCards>
        <CustomerReview />
      </Container>
      <MiniHero image={home.miniHeroImage} />
      <Container>
        <PageBody body={home.cardCalloutParagraph2} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    contentfulHomepage {
      mainHeroHeader
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      miniHeroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      cardCalloutTitle
      cardCalloutParagraph {
        childMarkdownRemark {
          html
        }
      }
      infoCardPicture {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      infoCardTitle1
      infoCardTitle2
      infoCardTitle3
      infoCardParagraph1 {
        childMarkdownRemark {
          html
        }
      }
      infoCardParagraph2 {
        childMarkdownRemark {
          html
        }
      }
      infoCardParagraph3 {
        childMarkdownRemark {
          html
        }
      }
      cardCalloutParagraph2 {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulListing(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          publishDate(formatString: "MMMM DD, YYYY")
          slug
          beds
          baths
          price
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 130)
            }
          }
        }
      }
    }
  }
`

export default Index
