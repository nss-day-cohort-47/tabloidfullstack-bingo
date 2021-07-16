import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Form, FormGroup } from "reactstrap";
import { editCategory, getCategory } from "../../modules/categoryManager";

const EditCategory = () => {
    const [category, setCategory] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams();
    const history = useHistory();

    const handleInputChange = (event) => {
        event.preventDefault();
        const newCategory = { ...category }

        let selectedVal = event.target.value
        newCategory[event.target.id] = selectedVal

        setCategory(newCategory)
    }

    const handleEditCategory = (event) => {
        event.preventDefault();
        const editedCategory = {
            id: id,
            name: category.name
        }

        editCategory(editedCategory)
            .then(() => history.push("/categories"))

    }

    useEffect(() => {
        getCategory(id)
            .then(category => {
                setCategory(category)

                setIsLoading(false)
            })
    }, [])
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
                    onClick={handleEditCategory}
                    disabled={isLoading}>
                    Save
                </button>
            </Form>
        </>
    )
}

export default EditCategory;