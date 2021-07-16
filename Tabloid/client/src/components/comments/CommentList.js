import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByPostId } from "../../modules/commentManager";
<<<<<<< HEAD
import Post from "../post/Post";

// Display all comments related to the Post
const CommentList = ({ post }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = () => {
    return getCommentsByPostId(post.id).then(res => setComments(res));
=======
import { getPostById } from "../../modules/postManager";
import Post from "../post/Post";
import Comment from "../comments/Comment";


// Display all comments related to the Post
const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);

  const { id } = useParams();

  const fetchComments = () => {
    return getCommentsByPostId(id).then(res => setComments(res));
  }

  const fetchPosts = () => {
    return getPostById(id).then(res => setPost(res));
>>>>>>> main
  }

  useEffect(() => {
    fetchComments();
  }, []);

<<<<<<< HEAD
  return (
    <>
      <h2>{post.title}</h2>
      <div className="container">
        <div className="row justify-content-center">
          {/* {comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))} */}
=======
  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <>

      <div className="container">
        <div className="row justify-content-center">
          {comments.map((comment) => (
            <Comment comment={comment} key={comment.id} post={post} />
          ))}
>>>>>>> main
        </div>
      </div>
    </>
  )
};

export default CommentList;