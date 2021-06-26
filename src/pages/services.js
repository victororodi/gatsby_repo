import React from "react"
import { Link, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';


import Layout from "../components/layout"
import Header from "../components/header"
import { Button, Container, Row, Col } from "react-bootstrap"

import SEO from "../components/seo"

import Img from "gatsby-image"

const ServicesPage = (props) => (
  <Layout>
    <SEO title="Services" />
    <Header />
    <Row>
      <Col lg={6} style={cstyle}>
        <figure className="position-relative">
        <Img fluid={props.data.clientsImage.childImageSharp.fluid} alt="logo design mombasa" />
        </figure>
        <figcaption className="fig2">
          <Button><h4 style={header4}>Maximize Your Brand Growth Online</h4></Button>
        </figcaption>
        <figcaption className="fig1">
          <h4 style={header3}>Logo Design</h4>
          <h4 style={header3}>E-commerce</h4>
          <h4 style={header3}>Web Design</h4>
          <h4 style={header3}>Mobile Apps</h4>
          <h4 style={header3}>Digital Marketing</h4>
          <h4 style={header3}>Cloud Services</h4>
          <Button><Link to="/contact" style={servicebtn}>Get in Touch</Link></Button>
        </figcaption>
      </Col>
      <Col lg={6} style={cstyle}>
        <Img fluid={props.data.clientImage.childImageSharp.fluid} 
        alt="webdesign mombasa" />
      </Col>
    </Row>
    <br />
    <br />
    <h3 className="post-title"><span>Capabilities</span></h3>
    <Container>
      <Row>
        <Col lg={4}>
          <h2 style={header2}>Research</h2>
          <p>
          Our design process starts with understanding your brand, needs, business objectives and goals for your project, and developing an appropriate timeline and project plan.

<br /> <br />We conduct extensive research on your industry, competitors, audience, and interview internal stakeholders to construct a tailored strategy and design.
          </p>
        </Col>
        <Col lg={4}>
          <h2 style={header2}>Development</h2>
          <p>
          Armed with the latest technology, our front and back-end development teams bring your designs to life. We develop for the now and build for the future.

<br /> <br />Our branding team creates powerful and holistic brand strategies that set the stage for your marketing initiatives for today and tomorrow.
          </p>
        </Col>
        <Col lg={4}>
          <h2 style={header2}>Branding Strategy</h2>
          <p>
          Working collaboratively with your team, we determine what content is necessary and useful for your site as well as where it should be placed for maximum impact.

<br /> <br />Your digital experience should be: fast, functional and always on. We monitor performance around the clock ensuring full-time uptime and scalability.
          </p>
        </Col>
      </Row>
    </Container>
    
  </Layout>
)
const cstyle = {
  margin: "0px",
  padding: "0px",
  border: "0px"

}

const header2 = {
  textAlign: "center"
}
const header3 = {
  color: "white",
  fontSize:20
}

const header4 = {
  color: "white",
  fontSize:24
}

const servicebtn = {
  color: "white",

}

export default ServicesPage

export const imageQuery = graphql`
query {
  clientImage: file(relativePath: { eq: "slider1.png" }) {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  clientsImage: file(relativePath: { eq: "slider7.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`;




