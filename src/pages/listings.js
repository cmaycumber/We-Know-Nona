import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import PageCTA from '../components/PageCTA';
import { graphql } from 'gatsby';
import ListingCard from '../components/ListingCard';
import ListingCards from '../components/ListingCards';
import { Heading } from 'grommet';

const Listings = ({ data }) => {
  const postNode = {
    title: `Listings - ${config.siteTitle}`,
  }
  const posts = data.allContentfulPost.edges
  const featuredListing = posts[0].node

  return (
    <Layout>
      <Helmet>
        <title>{`Listings - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="listings" customTitle />
      <Container>
        <Heading textAlign={'center'} level={1}>Listings</Heading>
        <ListingCards>
          <ListingCard {...featuredListing}/>
          {posts.slice(1).map(({ node: post }) => (
            <ListingCard key={post.id} {...post} />
          ))}
        </ListingCards>
        <PageCTA/>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
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
