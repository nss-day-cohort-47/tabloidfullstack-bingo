import React, { useState } from "react";
import { useHistory } from "react-router";
import { Form, FormGroup } from "reactstrap";
import { addCategory } from "../modules/categoryManager";

const CategoryForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState({
        name: ""
    })

    const history = useHistory()

    const handleInputChange = (event) => {
        const newCategory = { ...category }

        let selectedVal = event.target.value
        newCategory[event.target.id] = selectedVal

        setCategory(newCategory)
    }

    const handleSave = (event) => {
        event.preventDefault();

        setIsLoading(true);
        addCategory(category)
            .then(() => history.push("/categories"))

    }

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

export default CategoryForm;