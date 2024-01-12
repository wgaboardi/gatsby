import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({title}) => {
  /* Step 2: Use the useStaticQuery hook and
    graphql tag to query for data
    (The query gets run at build time) */
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{title} | {data.site.siteMetadata.title}</title> 
  )
}

export default Seo
