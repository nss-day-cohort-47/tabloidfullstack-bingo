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

export const deleteTag = (id) => {
  return getToken().then((token) =>
    fetch(`${baseUrl}/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    }))
};

export const getToken = () => firebase.auth().currentUser.getIdToken();

export const getTagById = (id) => {
  return getToken().then((token) =>
    fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => res.json()));
};