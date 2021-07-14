import React, { useEffect, useState } from "react";
import Category from "./Category";
import { getAllCategories } from "../modules/categoryManager";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getAll = () => {
        return getAllCategories()
            .then(res => setCategories(res));
    }

    // const load = () => {
    //     {
    //         categories == null ?
    //             setIsLoaded(false) :
    //             setIsLoaded(true);
    //     }
    // }

    useEffect(() => {
        getAll();
        // load();
    }, [])

    console.log(categories);
    // debugger
    return (
        // {categories == null ?
        //     <div>
        //     </div> :
        <>
            <h2>Categories</h2>
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