import React from "react";
import { Card, CardBody } from "reactstrap";

export const Category = ({ category, handleDeleteCategory }) => {
    return (
        <>
            <Card>
                <div>
                    <h3>{category.name}</h3>
                    <p>{category.id}</p>
                </div>
                <button type="button" className="btn btn-primary" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
            </Card>
        </>
    );
}

export default Category;