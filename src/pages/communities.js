import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import PageCTA from '../components/PageCTA';
import { graphql } from 'gatsby';
import CommunityCard from '../components/CommunityCard';
import CommunityCardList from '../components/CommunityCardList';
import { Heading } from 'grommet';

const Communities = ({ data }) => {
  const postNode = {
    title: `Communities - ${config.siteTitle}`,
  }
  const communities = data.allContentfulPage.edges
  const featuredCommunity = communities[0].node

  return (
    <Layout>
      <Helmet>
        <title>{`Communities - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="communities" customTitle />
      <Container>
        <Heading textAlign={'center'} level={1}>Communities</Heading>
        <CommunityCardList>
          <CommunityCard {...featuredCommunity}/>
          {communities.slice(1).map(({ node: communities }, i) => (
            <CommunityCard key={i} {...communities} />
          ))}
        </CommunityCardList>
        <PageCTA/>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
	allContentfulPage(filter: { 
    community:{eq :true}
  }){
    edges {
      node {
        title
        slug
        heroImage {
          title
          fluid(maxWidth: 1800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        body {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 320)
          }
        }
        community
      }
    }
  }
}
`


export default Communities


