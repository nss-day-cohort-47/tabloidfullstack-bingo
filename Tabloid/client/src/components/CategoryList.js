import React, { useEffect, useState } from "react";
import Category from "./Category";
import { getAllCategories } from "../modules/categoryManager";
import { useHistory } from "react-router";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const history = useHistory();

    const getAll = () => {
        return getAllCategories()
            .then(res => setCategories(res));
    }

    useEffect(() => {
        getAll();
    }, [])

    return (
        <>
            <h2>Categories</h2>
            <button type="button" className="btn btn-primary"
                onClick={() => history.push("/Category/create")}>
                Add New Category
            </button>
            <div>
                {categories.map((category) =>
                (<Category
                    category={category}
                    key={category.id} />
                ))}
            </div>
        </>
    );
}

export default CategoryList;