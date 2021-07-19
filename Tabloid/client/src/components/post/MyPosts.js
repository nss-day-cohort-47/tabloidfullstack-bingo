import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getAllUserPosts, deletePost } from '../../modules/postManager';
import Post from "./Post";

const MyPosts = () => {

  const [posts, setPosts] = useState([]);

  const history = useHistory();


  const fetchUserPosts = () => {
    return getAllUserPosts().then(posts => setPosts(posts))
  }

  const handleDeletePost = (id) => {
    let yes = window.confirm("Are you sure you want to delete this post?")
    if (yes === true) {
      deletePost(id)
        .then(() => history.push("/myPosts"))
    }
  }

  useEffect(() => {
    fetchUserPosts();
  }, []);

  return (
    <>
      <h1>My Posts</h1>
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

export default MyPosts;