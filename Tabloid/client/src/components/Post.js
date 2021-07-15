import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//render a single post
const Post = ({ post, category }) => {
  const date = new Date(post.publishDateTime);
  const publishDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
  return (
    <Card>
      <CardBody>
        <img src={ post.imageLocation } alt={ `Image for ${ post.title }` } />
        <h1>{ post.title }</h1>
        {/* { console.log('categories', category) }
        { category.map((cat) => (
          <p>{ cat.name }</p>
        )) } */}
        <p>Category: { category.name }</p>
        <p>Publish Date: { publishDate }</p>
      </CardBody>
    </Card>
  );
};

export default Post;