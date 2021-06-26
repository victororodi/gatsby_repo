/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import "./layout.css"
import facebookImage from "../images/facebook16.png"
import twitterImage from "../images/twitter16.png"

import {Image} from 'react-bootstrap'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="footerOne">
      <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Bitcix™ Limited Kenya. All Rights Reserved.
          {` `}
          <a href="https://www.facebook.com/bitcixltd" target="_blank" rel="noreferrer"><Image src={facebookImage} alt="facebook page link" fluid rounded/></a> <a href="https://www.twitter.com/bitcix" target="_blank" rel="noreferrer"><Image src={twitterImage} alt="twitter page link" fluid rounded /></a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout




