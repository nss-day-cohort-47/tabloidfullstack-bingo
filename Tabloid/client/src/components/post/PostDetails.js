import React, { useEffect, useState } from "react";
import { getPostById } from "../../modules/postManager";
import { Card, CardBody } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import { dateFixer } from "../../modules/helpers";
import { useHistory } from 'react-router';

//Display all published posts
const PostDetails = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  const fetchPosts = () => {
    return getPostById(id).then(post => setPost(post));
  }

  const handleClickAddComment = (event) => {
    event.preventDefault()
    history.push(`${post.id}/comments/add`)
  }

  const publishDate = dateFixer(post)

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Card>
        <CardBody>
          <img src={post.imageLocation} alt={`Image for ${post.title}`} />
          <h1>{post.title}</h1>
          <h3>Author: {post.userProfile?.displayName}</h3>
          <br />
          <h4>{post.content}</h4>

          {/* { console.log('categories', category) }
        { category.map((cat) => (
          <p>{ cat.name }</p>
        )) } */}
          <p>Category: {post.category?.name}</p>
          <p>Publish Date: {publishDate}</p>
          <button className="btn btn-primary" onClick={handleClickAddComment}>Add Comment</button>
          <Link to={`/post/${post.id}/comments`}>
            <button className="btn btn-primary">View Comments</button>
          </Link>

        </CardBody>
      </Card>
    </>
  )
};

export default PostDetails;