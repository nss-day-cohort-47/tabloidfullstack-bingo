import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteComment, getCommentsByPostId } from "../../modules/commentManager";
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
  }

  const handleDeleteComment = (id) => {
    let yes = window.confirm("Are you sure you want to delete this comment?")
    if (yes === true) {
      deleteComment(id)
        .then(fetchComments())
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <>

      <div className="container">
        <div className="row justify-content-center">
          {comments.map((comment) => (
            <Comment comment={comment} key={comment.id} post={post} handleDeleteComment={handleDeleteComment} />
          ))}
        </div>
      </div>
    </>
  )
};

export default CommentList;