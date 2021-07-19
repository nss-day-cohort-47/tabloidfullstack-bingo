import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { dateFixer } from "../../modules/helpers";
import firebase from "firebase/app";
import "firebase/auth";

//render a single post
const Post = ({ post, category, handleDeletePost }) => {
  const publishDate = dateFixer(post)
  const currentUser = firebase.auth().currentUser;

  //Checks to see if user has edit rights and displays button if they do
  const UserEdit = () => {
    if (currentUser.email === post.userProfile.email) {
      return (
        <>
          <Link to={ `/post/edit/${ post.id }` }>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button type="button" className="btn btn-primary" onClick={ () => handleDeletePost(post.id) }>Delete</button>
        </>
      )
    }
    else {
      return null
    }
  };



  return (
    <Card>
      <CardBody>
        <img src={ post.imageLocation } alt={ `Image for ${ post.title }` } />
        <h1>{ post.title }</h1>
        <p>Category: { category.name }</p>
        <p>Publish Date: { publishDate }</p>
        <Link to={ `/post/${ post.id }` }>
          <button className="btn btn-primary" >
            Details
          </button>
        </Link>
        <UserEdit />

      </CardBody>
    </Card>
  );
};

export default Post;