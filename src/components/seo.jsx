import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      titleTemplate={`NRDWARE | ${title || site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: `${site.siteMetadata.author}`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO