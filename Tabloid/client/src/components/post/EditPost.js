import React, { useEffect, useState } from "react";
import { editPost, getPostById } from "../../modules/postManager";
import { Card, CardBody } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import { dateFixer } from "../../modules/helpers";
import { useHistory } from 'react-router';
import { getAllCategories } from "../../modules/categoryManager";

//Display all published posts
const EditPost = () => {
  const [ post, setPost ] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const [ categorySelect, setCategorySelect ] = useState('');
  const [ categoryList, setCategoryList ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false);


  const fetchPosts = () => {
    return getPostById(id).then(post => setPost(post));
  }

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

    if (categorySelect === '') {
      newPost.categoryId = newPost.category.id;
    } else {
      newPost.categoryId = categorySelect;
    }
    editPost(newPost).then(() => history.push('/MyPosts'))
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <fieldset>
        <div className='post-form'>
          <div className='category-dropdown'>

            <label htmlFor="categories" >Choose a Category</label>
            <select value={ categorySelect } name="categories" onChange={ handleDropdownChange }>
              <option defaultValue={ post?.category?.name } >{ post?.category?.name }</option>
              { categoryList.map(c => (
                <option
                  htmlFor={ c.name }
                  key={ c.id * Math.random() }
                  value={ c.id }
                  selected={ post?.category?.name }
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

export default EditPost;