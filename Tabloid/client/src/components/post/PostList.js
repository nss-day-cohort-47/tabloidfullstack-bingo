import React, { useEffect, useState } from "react";
import { getAllPublishedPosts } from "../../modules/postManager";
import Post from "./Post";

//Display all published posts
const PostList = () => {
  const [ posts, setPosts ] = useState([]);

  const fetchPosts = () => {
    return getAllPublishedPosts().then(posts => setPosts(posts));
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Latest Posts</h1>
      <div className="container">
        <div className="row justify-content-center">
          { posts.map((post) => (
            <Post post={ post } key={ post.id } category={ post.category } />
          )) }
        </div>
      </div>
    </>
  )
};

export default PostList;