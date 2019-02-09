import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'
import { Heading, Text } from 'grommet'
import styled from 'styled-components'

const ListingTemplate = ({ data }) => {
  const {
    title,
    heroImage,
    publishDate,
    slug,
    beds,
    baths,
    price,
    body,
  } = data.contentfulListing
  const postNode = data.contentfulListing

  const InfoWrapper = styled.div`
    display: flex;
    margin: 0 auto 2em;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    justify-content: flex-start;
    align-items: center;
  `

  const InfoItems = styled(Heading)`

  `

  const InfoValues = styled(Text)`
    font-weight: bold;
    padding: 0em 1em;
  `
  
  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />
      <Hero title={title} image={heroImage} height={'70vh'} />
      <Container>
        <InfoWrapper>
          <InfoItems level={3}>Beds: </InfoItems>
          <InfoValues>{beds}</InfoValues>
        </InfoWrapper>
        <InfoWrapper>
          <InfoItems level={3}>Baths: </InfoItems>
          <InfoValues>{baths}</InfoValues>
        </InfoWrapper>
        {price !== 0 && <InfoWrapper>
          <InfoItems level={3}>Price: </InfoItems>
          <InfoValues>{price}</InfoValues>
        </InfoWrapper> }
        <PostDate date={publishDate} />
        <PageBody body={body} />
      </Container>
      {/* <PostLinks previous={previous} next={next} /> */}
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  contentfulListing(slug: { eq: $slug }) {
    title
    heroImage {
      title
      fluid(maxWidth: 1800) {
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
      ogimg: resize(width: 1800) {
        src
        width
        height
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
`

export default ListingTemplate
