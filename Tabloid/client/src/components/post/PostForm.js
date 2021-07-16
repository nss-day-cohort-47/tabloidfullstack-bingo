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
    let catSelect = { ...categorySelect };
    let selectedVal = e.target.value

    if (e.target.id.includes('Id')) {
      selectedVal = parseInt(selectedVal)
    }

    catSelect[ e.target.id ] = selectedVal
    console.log('selectedVal', selectedVal)
    setCategorySelect(selectedVal);
  };

  //Takes new post entry and sends it to the DB
  const handleClickSaveEntry = e => {
    e.preventDefault();
    setIsLoading(true);
    let newPost = { ...post };

    newPost.categoryId = categorySelect;


    addPost(newPost).then(() => history.push('/'))
  }

  return (
    <>

      {/* <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        { categoryList.map(c => (
          <button
            className="dropdown-item"
            type="button"
            eventKey={ c.Id }
            key={ c.Id * Math.random() }
            onClick={ () => setCategorySelect(`${ c.name }`) }
          >{ c.name }</button>)) }


      </div>
    </div> */}
      <fieldset>
        <div className='post-form'>
          <div className='category-dropdown'>
            {/* <select
              defaultValue={ post.category }
              name='category'
              id='category'
              onChange={ handleControlledInputChange }
              className='form-control'
              title='Select A Category'
            >{ categorySelect }</select> */}
            <label htmlFor="categories" >Choose a Category</label>
            <select name="categories" onChange={ handleDropdownChange }>
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