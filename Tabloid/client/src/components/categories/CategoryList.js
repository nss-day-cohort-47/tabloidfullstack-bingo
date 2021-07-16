import React, { useEffect, useState } from "react";
import Category from "./Category";
import { deleteCategory, getAllCategories, editCategory, getCategory } from "../../modules/categoryManager";
import { useHistory } from "react-router";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const history = useHistory();

    const getAll = () => {
        return getAllCategories()
            .then(res => setCategories(res));
    }


    const handleDeleteCategory = (id) => {
        let yes = window.confirm("Are you sure you want to delete this Category?")
        if (yes === true) {
            deleteCategory(id)
                .then(getAll())
        }
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
                    key={category.id}
                    handleDeleteCategory={handleDeleteCategory}
                    history={history} />
                ))}
            </div>
        </>
    );
}

export default CategoryList;