import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import { getAllUserPosts } from '../modules/postManager';
import Post from "./Post";

const MyPosts = () => {

  const [ posts, setPosts ] = useState([]);


  const fetchUserPosts = () => {
    return getAllUserPosts().then(posts => setPosts(posts))
  }


  useEffect(() => {
    fetchUserPosts();
  }, []);

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