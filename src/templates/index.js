import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ListingCard from '../components/ListingCard';
import Helmet from 'react-helmet'
import Container from '../components/Container'
// import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import Hero from '../components/Hero';
import CardCallout from '../components/CardCallout';
import InfoCard from '../components/InfoCard';
import ListingCards from '../components/ListingCards';
import { Button, Heading } from 'grommet';
import CustomerReview from '../components/CustomerReview';
import MiniHero from '../components/MiniHero';
import { Paragraph, Text } from 'grommet';
import PageBody from '../components/PageBody';

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const home  = data.contentfulHomepage
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Hero height={'100vh'} image={home.heroImage}> 
        <Heading textAlign={'center'} margin={'medium'} color={'#e1e1e1'} level={1}>{home.mainHeroHeader}</Heading>
        <Button style={{ padding: '.5em 2em', fontSize: '1.2em'}} primary margin={'medium'} label={'View Listings'}/>
      </Hero>
      <Container>
        <CardCallout text={home.cardCalloutParagraph.childMarkdownRemark.rawMarkdownBody} title={home.cardCalloutTitle}/>
        <InfoCard text={[home.infoCardParagraph1.childMarkdownRemark.rawMarkdownBody, home.infoCardParagraph2.childMarkdownRemark.rawMarkdownBody, home.infoCardParagraph3.childMarkdownRemark.rawMarkdownBody]} titles={[home.infoCardTitle1, home.infoCardTitle2, home.infoCardTitle3]} image={home.infoCardPicture}/>
        <ListingCards>
          <ListingCard {...featuredPost}/>
          {posts.slice(1).map(({ node: post }) => (
            <ListingCard key={post.id} {...post} />
          ))}
        </ListingCards>
        <CustomerReview/>
      </Container>
      <MiniHero image={home.miniHeroImage}/>
      <Container>
        {/* <CardCallout text={home.cardCalloutParagraph2.childMarkdownRemark.rawMarkdownBody}/> */}
        <PageBody body={home.cardCalloutParagraph2}/>
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
        childMarkdownRemark{
          rawMarkdownBody
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
        childMarkdownRemark{
          rawMarkdownBody
        }
      }
      infoCardParagraph2 {
        childMarkdownRemark{
          rawMarkdownBody
        }
      }
      infoCardParagraph3 {
        childMarkdownRemark{
          rawMarkdownBody
        }
      }
      cardCalloutParagraph2 {
        childMarkdownRemark{
          html
        }
      }
    }
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
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

export default Index
