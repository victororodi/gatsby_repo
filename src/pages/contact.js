import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import { Form, Button, Container, Row, Col } from "react-bootstrap"
import smallImage from "../images/f1.png"

import {Image} from 'react-bootstrap'
import Map from "../components/map"

const ContactPage = (props) => (
  <Layout>
    <SEO title="Contact" />
    <Header />
    <BackgroundImage
    className="masthead"
    fluid={props.data.contactImage.childImageSharp.fluid}
    >
    </BackgroundImage>
    <br />
    <Container>
      <Row>
        <Col lg={6}>
        <Form
        name="contact w1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bits"
        >
          <input type="hidden" name="form-name" value="contact w1" />

          <p hidden>
            <label>
              Don't fill this out: <input name="bits" />
            </label>
          </p>
          <Image style={temp} src={smallImage} fluid />
          <Form.Label>Send a message and we will get back to you within 24 hours.
          </Form.Label>
          <br />
          <br />
          <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Get in Touch</Form.Label>
          <Form.Control as="select" name="category">
            <option>Request a Quote</option>
            <option>General Question</option>
          </Form.Control>
          </Form.Group>
          <Row>
            <Col lg={6}>
            <Form.Group controlId="formBasicFirstName" className="firstname">
              <Form.Label>First Name</Form.Label> <br />
              <Form.Control required type="text" name="first-name" />
            </Form.Group> <br />
            </Col>
            <Col lg={6}>
            <Form.Group controlId="formBasicLastName" className="lastname">
              <Form.Label>Last Name</Form.Label> <br />
              <Form.Control required type="text" name="last-name" />
            </Form.Group> <br />    
            </Col>
          </Row>
            <Form.Group controlId="formBasicEmail" className="email">
              <Form.Label>Email</Form.Label> <br />
              <Form.Control required type="email" name="email" />
            </Form.Group> <br />
            <Form.Group controlId="formBasicDetails">
              <Form.Label>Details</Form.Label> <br />
              <Form.Control
                required
                as="textarea"
                rows="3"
                placeholder="Inquire/Briefly Describe Your Project Here"
                name="info"
              />
            </Form.Group> <br />
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
        <Col lg={6}>
          <Map style={mapss}/>
        </Col>
      </Row>

    </Container>
  </Layout>
)

const mapss = {
  margin: 40,
}

const temp = {
  position: "absolute",
  top: -20,
  left: 150,
  width: 100,
  background: "rgba(255, 255, 255, 0.692)",
  borderRadius: 80
}
export default ContactPage

export const contactQuery = graphql`
query {
  contactImage: file(relativePath: { eq: "bitcixlab.png" }) {
    childImageSharp {
      fluid(maxWidth: 1440, maxHeight: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`;