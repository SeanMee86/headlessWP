import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GravityForm from "../components/gravity-form/gravity-form";
import PageHeader from "../components/page-header/page-header";

const Page = ({data}) => {
    data = data.wpcontent.page;
    return (
        <Layout title={ data.title }>
            <SEO title={ data.seo.title } seoInfo={data.seo} />
            <PageHeader pageTitle={data.title}/>
            <div style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 1.0875rem 1.45rem`,
                fontFamily: "Avenir, sans-serif"
            }} dangerouslySetInnerHTML={{__html: data.content}}/>
            <div style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 1.0875rem 1.45rem`,
            }}>
                <GravityForm/>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query MyQuery($id: ID!) {
  wpcontent {
    page(id: $id) {
      content
      title
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
