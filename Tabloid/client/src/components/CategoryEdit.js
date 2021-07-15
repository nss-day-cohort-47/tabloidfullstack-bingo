import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Form, FormGroup } from "reactstrap";
import { editCategory } from "../modules/categoryManager";

const EditCategory = () => {
    const [category, setCategory] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleInputChange = (event) => {
        const newCategory = { ...category }

        let selectedVal = event.target.value
        newCategory[event.target.id] = selectedVal

        setCategory(newCategory)
    }

    const handleSave = (event) => {
        event.preventDefault();

        setIsLoading(true);
        editCategory(category)
            .then(() => history.push("/categories"))

    }

    // const handleEdit = (event) => {
    //     event.preventDefault();
    //     setIsLoading(true);

    //     const editedCategory = {
    //         id = categoryId,
    //         name = category.name
    //     }

    //     EditCategory(editedCategory)
    //         .then(() => history.push("/categories"))
    // }    
    return (
        <>
            <Form>
                <FormGroup>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="category name"
                        defaultValue={category.name}
                        onChange={handleInputChange} />
                </FormGroup>
                <button className="btn btn-primary"
                    onClick={handleSave}
                    disabled={isLoading}>
                    Save
                </button>
            </Form>
        </>
    )
}

export default EditCategory;