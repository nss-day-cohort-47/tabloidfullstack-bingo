import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByPostId } from "../../modules/commentManager";
import Post from "../post/Post";


// Display all comments related to the Post
const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);

  const { id } = useParams();

  const fetchComments = () => {
    return getCommentsByPostId(id).then(res => setComments(res));
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <h2>{post.title}</h2>
      <div className="container">
        <div className="row justify-content-center">
          {/* {comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))} */}
        </div>
      </div>
    </>
  )
};

export default CommentList;