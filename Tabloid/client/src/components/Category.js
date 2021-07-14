import React from "react";
import { Card, CardBody } from "reactstrap";

export const Category = ({ category }) => {
    return (
        <>
            <Card>

                <div>
                    <h3>{category.name}</h3>
                    <p>{category.id}</p>
                </div>
            </Card>
        </>
    );
}

export default Category;