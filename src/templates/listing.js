import React, { useState } from 'react'
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
import SwipeableViews from 'react-swipeable-views'

const InfoWrapper = styled.div`
  display: flex;
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  justify-content: flex-start;
  align-items: center;
`

const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1em 0;
`

const Dot = styled.div`
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 4px;
  border: 1px solid black;
  background: ${props => (props.selected ? 'black' : 'transparent')};
`

const InfoItems = styled(Heading)``

const InfoValues = styled(Text)`
  font-weight: bold;
  padding: 0em 1em;
`

const ListingTemplate = ({ data }) => {
  const {
    title,
    heroImage,
    additionalImages,
    publishDate,
    slug,
    beds,
    baths,
    price,
    body,
  } = data.contentfulListing
  const postNode = data.contentfulListing

  const [selected, setSelected] = useState(0)

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />
      {additionalImages ? (
        <React.Fragment>
          <SwipeableViews
            onChangeIndex={(index, indexLatest, meta) => setSelected(index)}
            index={selected}
            enableMouseEvents
          >
            {additionalImages.map((image, index) => {
              return (
                <Hero title={title} image={image} key={index} height={'70vh'} />
              )
            })}
          </SwipeableViews>
          <Dots>
            {additionalImages.length > 1 &&
              additionalImages.map((image, index) => {
                return (
                  <Dot
                    onClick={() => setSelected(index)}
                    selected={index === selected}
                    key={index}
                  />
                )
              })}
          </Dots>
        </React.Fragment>
      ) : (
        <Hero title={title} image={heroImage} height={'70vh'} />
      )}
      <Container>
        <InfoWrapper>
          <InfoItems level={3}>Beds: </InfoItems>
          <InfoValues>{beds}</InfoValues>
        </InfoWrapper>
        <InfoWrapper>
          <InfoItems level={3}>Baths: </InfoItems>
          <InfoValues>{baths}</InfoValues>
        </InfoWrapper>
        {price !== 0 && (
          <InfoWrapper>
            <InfoItems level={3}>Price: </InfoItems>
            <InfoValues>{price}</InfoValues>
          </InfoWrapper>
        )}
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
      additionalImages {
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
