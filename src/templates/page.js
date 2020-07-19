import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GravityForm from "../components/gravity-form/gravity-form";
import PageHeader from "../components/page-header/page-header";
import { Container, Row, Col } from "react-bootstrap";
import pageStyles from './pageStyles.module.scss';
import contentParser from 'gatsby-wpgraphql-inline-images';

const Page = ({data: {wpcontent: {page}}, pageContext: {pluginOptions: {wordPressUrl, uploadsUrl}}}) => {
    const {content} = page;
    return (
        <Layout title={ page.title }>
            <SEO title={ page.seo.title } seoInfo={page.seo} />
            <PageHeader pageTitle={page.title}/>
            <Container>
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
}

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

export default Page
