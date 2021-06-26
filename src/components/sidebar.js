import React from "react"
import { Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import sidebarimg from "../images/vic.png"
import facebookImage from "../images/linkedin32.png"
import instagramImage from "../images/instagram.png"
import {Image} from 'react-bootstrap'

const Sidebar = (props) => (
    <Card>
        <img className="card-image-top" src={sidebarimg} alt="Beach" />
        <Card.Title className="text-center text-uppercase mb-3">Victor Orodi</Card.Title>
        <Card.Text className="text-center"><b>Entrepreneur | Software Developer</b> <br /></Card.Text>
        <Card.Text>Enjoys learning new technologies, fitness and travelling.</Card.Text>
        <div className="author-social-links text-center mb-2">
            <a href="https://www.linkedin.com/in/orodivictor/" target="_blank" rel=" noopener noreferrer"><Image src={facebookImage} alt="facebook page link" fluid rounded/></a> 
            <a href="https://www.instagram.com/melo.254/" className="ml-4" target="_blank" rel=" noopener noreferrer"><Image src={instagramImage} alt="facebook page link" fluid rounded/></a>
        </div>
    </Card>

)
export default Sidebar

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