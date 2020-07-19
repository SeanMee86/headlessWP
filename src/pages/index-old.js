import React from "react"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import {graphql} from "gatsby";

const IndexPage = ({data}) => {
    return (
        <Layout>
            {/*<SEO title="Home" seoInfo={data.wordpressPage.yoast} />*/}
            {/*<div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>*/}
        </Layout>
    )
}

// export const query = graphql`
//     query {
//       wordpressPage(title: {eq: "Home"}) {
//         yoast {
//           canonical
//           focuskw
//           metadesc
//           metakeywords
//           opengraph_description
//           opengraph_image
//           opengraph_title
//           title
//         }
//         title
//         content
//       }
//     }
// `

export default IndexPage
