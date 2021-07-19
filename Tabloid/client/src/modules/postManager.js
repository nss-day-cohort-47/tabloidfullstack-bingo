import { getToken } from './authManager'

const baseUrl = '/api/Post';


//check to see if a user is logged in and then fetch all published posts
export const getAllPublishedPosts = () => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("An unknown error occurred while trying to fetch all posts");
      }
    });
  });
};

//Get all posts for current logged in user
export const getAllUserPosts = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/GetAllUserPosts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something happened while attempting to fetch your posts")
      }
    })
  })
};

//Get post details by ID
export const getPostById = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong :(")
      }
    })
  })
};

//Deletes a post
export const deletePost = (id) => {
  return getToken().then((token) => {
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
  })
}

//add new post to DB
export const addPost = (post) => {
  console.log('post obj', post)
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
  });
};