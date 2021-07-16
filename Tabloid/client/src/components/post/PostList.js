import React, { useEffect, useState } from "react";
import { deletePost, getAllPublishedPosts } from "../../modules/postManager";
import Post from "./Post";

//Display all published posts
const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    return getAllPublishedPosts().then(posts => setPosts(posts));
  }

  const handleDeletePost = (id) => {
    let yes = window.confirm("Are you sure you want to delete this post?")
    if (yes === true) {
      deletePost(id)
        .then(getAllPublishedPosts())
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Latest Posts</h1>
      <div className="container">
        <div className="row justify-content-center">
          {posts.map((post) => (
            <Post post={post} key={post.id} category={post.category} handleDeletePost={handleDeletePost} />
          ))}
        </div>
      </div>
    </>
  )
};

export default PostList;