import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Card>
      <CardBody>
        <p>Title: { post.title }</p>
        <p>Contents: { post.content }</p>
      </CardBody>
    </Card>
  )
}

export default Post;