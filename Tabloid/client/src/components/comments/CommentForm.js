import React, { useState } from 'react';
import { addComment } from "../../modules/commentManager";
import { useHistory, useParams } from "react-router";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const CommentForm = () => {
    const { id } = useParams();
    const emptyComment = {
        postId: id,
        subject: "",
        content: "",
    };

    const [comment, setComment] = useState(emptyComment);
    const history = useHistory();

    const handleInputChange = (event) => {
        const newComment = { ...comment };
        let selectedVal = event.target.value
        newComment[event.target.id] = selectedVal
        setComment(newComment)
    };

    const handleClickSaveComment = (event) => {
        event.preventDefault()
        addComment(comment)
            .then(() => history.push(`/post/${id}/comments`))
    };

    return (
        <Form>
            <FormGroup>
                <Label for="subject">Subject</Label>
                <Input type="text" id="subject" placeholder="Comment Subject"
                    value={comment.subject}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="content">Content</Label>
                <Input type="text" id="content" placeholder="Comment Content"
                    value={comment.content}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleClickSaveComment}>Submit</Button>
        </Form>
    );
};

export default CommentForm;