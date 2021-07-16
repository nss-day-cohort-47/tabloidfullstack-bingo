import { getToken } from './authManager'

const baseUrl = '/api/post';


//check to see if a user is logged in and then fetch all published posts
export const getAllPublishedPosts = () => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ token }`
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
    return fetch(`${ baseUrl }/GetAllUserPosts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ token }`
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
    return fetch(`${ baseUrl }/${ id }`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ token }`
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong :(")
      }
    })
  })
}