import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { dateFixer } from "../../modules/helpers";

//render a single post
const Post = ({ post, category }) => {

  const publishDate = dateFixer(post)

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
        <Link to={ `/post/${ post.id }` }>
          <strong>Details</strong>
        </Link>
        <br />
        <Link to={ `/post/edit/${ post.id }` }>
          <strong>Edit</strong>
        </Link>
        <p>Publish Date: { publishDate }</p>
      </CardBody>
    </Card>
  );
};

export default Post;