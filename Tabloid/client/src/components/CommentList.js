import React, { useEffect, useState } from "react";
import { getCommentsByPostId } from "../modules/commentManager";
import Post from "./Post";

// Display all comments related to the Post
const CommentList = ({ post }) => {
    const [comments, setComments] = useState([]);

    const fetchComments = () => {
        return getCommentsByPostId(post.id).then(res => setComments(res));
    }

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <>
            <h2>{post.title}</h2>
            <div className="container">
                <div className="row justify-content-center">
                    {comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            </div>
        </>
    )
};

export default CommentList;