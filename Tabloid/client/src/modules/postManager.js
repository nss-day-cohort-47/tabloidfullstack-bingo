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
        throw new Error("An unknown error occorred while trying to fetch all posts");
      }
    });
  });
};