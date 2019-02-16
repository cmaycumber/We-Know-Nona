import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import { Heading } from 'grommet'
import PageCTA from '../components/PageCTA'

const PageTemplate = ({ data }) => {
  const { title, heroImage, slug, body } = data.contentfulPage
  const postNode = data.contentfulPage

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />
      {heroImage && (
        <Hero image={heroImage} height={'60vh'}>
          <Heading
            textAlign={'center'}
            margin={'medium'}
            color={'#e1e1e1'}
            level={1}
          >
            {title}
          </Heading>
        </Hero>
      )}
      <Container>
        {!heroImage && <PageTitle>{title}</PageTitle>}
        <PageBody body={body} />
        <PageCTA />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
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
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate
