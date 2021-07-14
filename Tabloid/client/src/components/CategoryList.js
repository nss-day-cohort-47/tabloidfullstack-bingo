import React, { useEffect, useState } from "react";
import Category from "./Category";
import { getAllCategories } from "../modules/categoryManager";

const CategoryList = () => {
    const [categories, setCategories] = useState();

    const getAll = () => {
        getAllCategories()
            .then(res => setCategories(res));
    }

    useEffect(() => {
        getAll();
    }, [])

    console.log(categories);
    // debugger
    return (
        <div className="searchResults">
            {categories == null ?
                <div>
                </div> :
                categories.map(category =>
                    <Category
                        key={category.id}
                        category={category} />
                )}
        </div>
    );
}

export default CategoryList;