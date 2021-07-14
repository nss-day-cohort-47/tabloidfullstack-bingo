import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Card>
      <CardBody>
        <img src={ post.imageLocation } alt={ `Image for ${ post.title }` } />
        <p>Title: { post.title }</p>
        <p>Contents: { post.content }</p>
        <p>Publish Date: { post.publishDateTime }</p>
      </CardBody>
    </Card>
  )
}

export default Post;