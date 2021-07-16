import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../modules/categoryManager';
import { addPost } from '../../modules/postManager';
import { useHistory } from 'react-router-dom';

const PostForm = () => {
  const [ post, setPost ] = useState({});
  const [ categorySelect, setCategorySelect ] = useState();
  const [ categoryList, setCategoryList ] = useState([ '' ])
  const [ isLoading, setIsLoading ] = useState(false);
  const history = useHistory()


  //fetch list of all categories for dropdown
  useEffect(() => {
    getAllCategories()
      .then(res => {
        setCategoryList(res)
      })
  }, [])

  //Handle input changes and parse user ID
  const handleControlledInputChange = (e) => {
    let newPost = { ...post };
    let selectedVal = e.target.value

    if (e.target.id.includes('Id')) {
      selectedVal = parseInt(selectedVal)
    }

    newPost[ e.target.id ] = selectedVal
    setPost(newPost);
  };

  //Handle input changes and parse user ID
  const handleDropdownChange = (e) => {
    e.preventDefault()

    let selectedVal = e.target.value;
    setCategorySelect(selectedVal);
  };

  //Takes new post entry and sends it to the DB
  const handleClickSaveEntry = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let newPost = { ...post };

    newPost.categoryId = categorySelect;
    addPost(newPost).then(() => history.push('/MyPosts'))
  }

  return (
    <>
      <fieldset>
        <div className='post-form'>
          <div className='category-dropdown'>

            <label htmlFor="categories" >Choose a Category</label>
            <select value={ categorySelect } name="categories" onChange={ handleDropdownChange }>
              { categoryList.map(c => (
                <option
                  htmlFor={ c.name }
                  key={ c.id * Math.random() }
                  value={ c.id }
                // onSelect={ handleControlledInputChange }
                >
                  { c.name }
                </option>
              ))
              }
            </select>
          </div>
          <form action="">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={ handleControlledInputChange } required className='form-control' placeholder='Enter a title' defaultValue={ post.title } />
            <label htmlFor="imageLocation">Image URL:</label>
            <input type="text" id="imageLocation" onChange={ handleControlledInputChange } className='form-control' placeholder='Image URL (optional)' defaultValue={ post.imageLocation } />
            <label htmlFor="content">Content:</label>
            <textarea type="text" id="content" onChange={ handleControlledInputChange } required className='form-control' placeholder="Write stuff here..." rows="3" defaultValue={ post.content } />
          </form>
        </div>
      </fieldset>
      <div className='save-button'>
        <button className='btn' type='button' disabled={ isLoading } variant='primary' onClick={ handleClickSaveEntry }>Save Post</button>
      </div>
    </>
  )

};

export default PostForm;