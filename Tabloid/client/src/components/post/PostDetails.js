import React, { useEffect, useState } from "react";
import { getPostById } from "../../modules/postManager";
import { Card, CardBody } from "reactstrap";
import { useParams } from "react-router-dom";
import { dateFixer } from "../../modules/helpers";

//Display all published posts
const PostDetails = () => {
  const [ post, setPost ] = useState([]);
  const { id } = useParams();

  const fetchPosts = () => {
    return getPostById(id).then(post => setPost(post));
  }

  const publishDate = dateFixer(post)

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Card>
        <CardBody>
          <img src={ post.imageLocation } alt={ `Image for ${ post.title }` } />
          <h1>{ post.title }</h1>
          <h3>Author: { post.userProfile?.displayName }</h3>
          <br />
          <h4>{ post.content }</h4>

          {/* { console.log('categories', category) }
        { category.map((cat) => (
          <p>{ cat.name }</p>
        )) } */}
          <p>Category: { post.category?.name }</p>
          <p>Publish Date: { publishDate }</p>
        </CardBody>
      </Card>
    </>
  )
};

export default PostDetails;