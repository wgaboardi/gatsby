import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

const Header = () => {
   const data = useStaticQuery(graphql`
   query {
      site {
          siteMetadata {
             title
          }
      }
   }`)
   return (
     <header className={siteTitle}>
     {data.site.siteMetadata.title}
     </header>
  )
}

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Header></Header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem} ><Link className={navLinkText} to="/">Home</Link></li>
          <li className={navLinkItem} ><Link className={navLinkText} to="/blog">Blog</Link></li>
          <li className={navLinkItem} ><Link className={navLinkText} to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout