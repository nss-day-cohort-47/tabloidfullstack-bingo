import firebase from "firebase/app";
import "firebase/auth";

const baseUrl = '/api/tag';

export const getAllTags = () => {
  return getToken().then((token) =>
    fetch(`${baseUrl}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(resp => resp.json()));
};

export const addTag = (tag) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tag),
  });
};

export const getToken = () => firebase.auth().currentUser.getIdToken();

export const getTagById = (id) => {
  return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};