import React from "react";
import { Card, CardBody } from "reactstrap";


// Renders a single Comment
const Comment = ({ comment }) => {
    return (
        <Card>
            <CardBody>
                <h3>{comment.subject}</h3>
                <h5>Posted by: {comment.displayName}</h5>
                <p>{comment.content}</p>
                <p>Posted on: {comment.createDateTime}</p>
            </CardBody>
        </Card>
    );
};

export default Comment;