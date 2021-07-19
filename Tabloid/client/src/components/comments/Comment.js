import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { getUserProfile } from "../../modules/userProfileManager";


// Renders a single Comment
const Comment = ({ comment, post }) => {
    const [user, setUser] = useState({})

    const userName = () => {
        getUserProfile(`${comment.userProfileId}`).then(res => setUser(res))
    }

    useEffect(() => {
        userName();
    }, []);

    return (
        <Card>
            <CardBody>
                <h2>Post: {post.title}</h2>
                <h3>{comment.subject}</h3>
                <h5>Posted by: {user.displayName} </h5>
                <p>{comment.content}</p>
                <p>Posted on: {comment.createDateTime}</p>
            </CardBody>
        </Card>
    );
};

export default Comment;