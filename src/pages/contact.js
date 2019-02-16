import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import ContactFormPhone from '../components/ContactFormPhone'
import { Text } from 'grommet'

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>Contact</PageTitle>
        <Text>
          With over 50 years of combined experience in the real estate industry,
          the Maycumber Team provides a variety of services to meet their
          clients needs when buying or selling a home. Located in the East
          Orlando Area, Allyn and Pam Maycumber are true experts in the Lake
          Nona and Medical City Area. They are committed to the community and
          the people they help serve.
        </Text>
        <ContactFormPhone />
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
