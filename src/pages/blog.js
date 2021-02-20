import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { Container, Card, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Img from "gatsby-image"


const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <Header />
    <hr />
    <Container>
      <Row>
      {data.allMarkdownRemark.edges.map(post => (
          <Col lg={6} key={ post.node.id }>
            <Card className="mb-3" style={{border:'none', background:'whitesmoke'}}>
              <Card.Title><Link to={post.node.frontmatter.path} style={{textDecoration:'none'}}><h3>{post.node.frontmatter.title}</h3></Link>
              </Card.Title>
              <h5>{post.node.frontmatter.description}</h5>
              <small>Posted by  {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
              <br />
              <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} alt={post.node.frontmatter.imagealt}/>
              <br />
              <Link to={post.node.frontmatter.path}>Read More</Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Layout>
)

export default BlogPage

export const indexQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          author
          date
          path
          description
          imagealt
          image {
            childImageSharp {
              fluid(maxHeight: 300, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`;

