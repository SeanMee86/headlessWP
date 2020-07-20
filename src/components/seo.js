/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ lang, meta, seoInfo }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seoInfo.title}
      titleTemplate={`${seoInfo.title}`}
      meta={[
        {
          name: `description`,
          content: seoInfo.metaDesc
        },
        {
          property: `og:title`,
          content: seoInfo.opengraphTitle
        },
        {
          property: `og:description`,
          content: seoInfo.opengraphDescription
        },
        {
          property: `og:type`,
          content: seoInfo.opengraphType
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Sean`,
        },
        {
          name: `twitter:title`,
          content: seoInfo.title,
        },
        {
          name: `twitter:description`,
          content: seoInfo.metaDesc
        },
      ].concat(meta)}
    >
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  seoInfo: PropTypes.object
}

export default SEO
