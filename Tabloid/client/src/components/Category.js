import React from "react";

const Category = ({ category }) => {
    return (
        <div>
            <h3>{category.Name}</h3>
            <p>{category.Id}</p>
        </div>
    );
}

export default Category;