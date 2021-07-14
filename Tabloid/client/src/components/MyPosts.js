import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import { getAllUserPosts } from '../modules/postManager';
import Post from "./Post";

const MyPosts = () => {
  const [ user, setUser ] = useState();
  const [ posts, setPosts ] = useState([]);

  const getCurrentUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user.uid);
      }
    })
  }

  const fetchUserPosts = () => {
    return getAllUserPosts(user).then(posts => setPosts(posts))
  }

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    fetchUserPosts();
  }, [ user ]);

  return (
    <>
      <h1>My Posts</h1>
      <div className="container">
        <div className="row justify-content-center">
          { posts.map((post) => (
            <Post post={ post } key={ post.id } />
          )) }
        </div>
      </div>
    </>
  )

};

export default MyPosts;