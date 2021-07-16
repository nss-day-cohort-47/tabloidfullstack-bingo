import React from "react";
import { Card, CardBody } from "reactstrap";



// Renders a single Comment
const Comment = ({ comment, post }) => {
    return (
        <Card>
            <CardBody>
                <h2>Post: {post.title}</h2>
                <h3>{comment.subject}</h3>
                <h5>Posted by: {post.userProfile?.displayName} </h5>
                <p>{comment.content}</p>
                <p>Posted on: {comment.createDateTime}</p>
            </CardBody>
        </Card>
    );
};

export default Comment;