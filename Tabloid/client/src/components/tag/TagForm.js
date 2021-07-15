import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addTag } from "../../modules/tagManager";
import { useHistory } from "react-router-dom";

export const TagForm = () => {
  const emptyTag = {
    name: ''
  };

  const [tag, setTag] = useState(emptyTag);
  const history = useHistory();

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const tagCopy = { ...tag };

    tagCopy[key] = value;
    setTag(tagCopy);
  };

  const handleSave = (evt) => {
    evt.preventDefault();

    addTag(tag).then((p) => {
      // Navigate the user back to the home route
      history.push("/tag");
    });
  };

  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="tag name"
          value={tag.name}
          onChange={handleInputChange} />
      </FormGroup>
      <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
    </Form>
  );
};

export default TagForm;