import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Tag = ({ tag }) => {
  return (
    <Card >
      <CardBody>
        <p>{tag.name}</p>
        <p><Link to={`/tag/delete/${tag.id}`}>Delete</Link></p>
      </CardBody>
    </Card>
  );
};

export default Tag;