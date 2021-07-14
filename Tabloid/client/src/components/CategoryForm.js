import React, { useState } from "react";

const CategoryForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState({
        Id = category.Id,
        Name = ""
    })

    const handleInputChange = (event) => {
        const newCategory = { ...category }

        let selectedVal = event.target.value
        newCategory[event.target.id] = selectedVal

        setCategory(newCategory)
    }

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="category name"
                        value={category.name}
                        onChange={handleInputChange} />
                </FormGroup>
                <button className="btn btn-primary"
                    onClick={handleSaveEntry}
                    disabled={isLoading}>
                    Save
                </button>
            </Form>
        </>
    )
}