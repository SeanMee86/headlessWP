import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GravityForm from "../../components/gravity-form/gravity-form";
import PageHeader from "../../components/page-header/page-header";
import { Container, Row, Col } from "react-bootstrap";
import pageStyles from './pageStyles.module.scss';
import contentParser from 'gatsby-wpgraphql-inline-images';

const Index = (
    {
      data: {
          wpcontent: {
              page: {
                  seo,
                  title,
                  content
              }
          }
      },
      pageContext: {
          pluginOptions: {
              wordPressUrl,
              uploadsUrl
          }
      }
    }) => (
        <Layout title={ title }>
            <SEO title={ seo.title } seoInfo={ seo } />
            <PageHeader pageTitle={ title }/>
            <Container style={{paddingTop: "50px"}}>
                <Row>
                    <Col lg={8} className={pageStyles.pageContent}>
                        <div>{contentParser({ content }, {wordPressUrl, uploadsUrl})}</div>
                    </Col>
                    <Col lg={4} className={pageStyles.sidebar} >
                        <p>To Request an Appointment</p>
                        <p>Call 214-739-1706</p>
                        <p>or</p>
                        <p>Use Our Easy Online Contact Form</p>
                        <GravityForm/>
                    </Col>
                </Row>
            </Container>
        </Layout>
)

export const query = graphql`
  query MyQuery($id: ID!) {
  wpcontent {
    page(id: $id) {
      content
      title
      uri
      seo {
          metaDesc
          metaKeywords
          opengraphAuthor
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
          }
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          title
        }
    }
  }
}
`

export default Index
