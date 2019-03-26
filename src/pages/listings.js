import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import PageCTA from '../components/PageCTA'
import { graphql } from 'gatsby'
import ListingCard from '../components/ListingCard'
import ListingCards from '../components/ListingCards'
import { Heading } from 'grommet'

const Listings = ({ data }) => {
  const postNode = {
    title: `Listings - ${config.siteTitle}`,
  }

  const listings = data.allContentfulListing.edges
  const featuredListing = listings[0].node

  return (
    <Layout>
      <Helmet>
        <title>{`Listings - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="listings" customTitle />
      <Container>
        <Heading textAlign={'center'} level={1}>
          Listings
        </Heading>
        <ListingCards>
          <ListingCard {...featuredListing} />
          {listings.slice(1).map(({ node: listings }, i) => (
            <ListingCard key={i} {...listings} />
          ))}
        </ListingCards>
        <PageCTA />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulListing(
      sort: { fields: [publishDate], order: DESC }
      filter: {node_locale: {eq: "en-US"}}            
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
          metaDescription {
            internal {
              content
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

export default Listings
