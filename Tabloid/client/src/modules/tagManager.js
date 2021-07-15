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
  return getToken().then((token) =>
    fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tag),
    })).then(resp => resp.json())
};

export const getToken = () => firebase.auth().currentUser.getIdToken();

export const getTagById = (id) => {
  return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};