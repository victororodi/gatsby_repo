import React from "react"
import { Link } from "gatsby"
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "react-bootstrap"

const Post = ({ title, author, path, date, body }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span> by 
                    <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>
                    {body}
                </CardText>
                <Link to={path} className="btn btn-outline-primary float-right">Read More</Link>
            </CardBody>
        </Card>
    )
    
    
}

export default Post