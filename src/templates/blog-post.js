import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import { Button, Container, Row, Col } from "react-bootstrap"
import "gatsby-plugin-social9-socialshare"

import Sidebar from "../components/sidebar"


export default function Template({data}) {
    const post = data.markdownRemark

    return (
        <Layout>
        <Header />
        <hr />
        <Container>
            <Row>
                <Col md={8}>
                <div class="s9-widget-wrapper">
                <div class="s9-widget-wrapper">
                    <h1>{post.frontmatter.title}</h1>
                    <small>Posted by {post.frontmatter.author} on {post.frontmatter.date}</small>
                    <div dangerouslySetInnerHTML={{__html: post.html}}/>
                    <Button className="btn-sm mb-3"><Link to="/blog" style={{textDecoration:'none', color:'white'}}>Go Back</Link></Button>
                    </div>
                </div>
                </Col>
                <Col md={4}>
                <Sidebar />
                </Col>
            </Row>
        </Container>
        </Layout>
        
    )
    
}

export const postQuery = graphql`
query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path } }){
        html
        frontmatter {
            path
            title
            author
            date
        }
    }
}
`