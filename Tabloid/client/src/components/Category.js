import React from "react";
import { Card, CardBody } from "reactstrap";

export const Category = ({ category, handleDeleteCategory, handleEditCategory }) => {
    return (
        <>
            <Card>
                <div>
                    <h3>{category.name}</h3>
                    <p>{category.id}</p>
                </div>
                <button type="button" className="btn btn-primary" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                <button type="button" className="btn btn-primary" onClick={() => handleEditCategory(category.id)}>Edit</button>
            </Card>
        </>
    );
}

export default Category;