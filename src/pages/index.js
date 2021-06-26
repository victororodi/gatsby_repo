import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import 'bootstrap/dist/css/bootstrap.min.css';


import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import { Row, Col } from "react-bootstrap"

import Img from "gatsby-image"

const IndexPage = (props) => (
  <Layout>
    <Header />
    <SEO title="Home" />
    <BackgroundImage
      className="masthead"
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <h1 style={welcome}>Web Design, Logo Design, Mobile Apps, Cloud Services</h1>
      <Row>
        <Col lg={6}>
        <div>
      <Img className="client" fluid={props.data.overImage.childImageSharp.fluid} 
        alt="webdesign mombasa" />
      </div>
        </Col>
      </Row>
    </BackgroundImage>
  </Layout>
)

const welcome = {
  paddingTop:15,
  color:"white",
  fontSize: 25,
  marginLeft: 20,
}

export default IndexPage

export const pageQuery = graphql`
query {
  indexImage: file(relativePath: { eq: "slider5.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  overImage: file(relativePath: { eq: "client.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`;
