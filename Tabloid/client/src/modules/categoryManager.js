import firebase from "firebase/app";
import "firebase/auth";

const baseUrl = '/api/Category';
export const getToken = () => firebase.auth().currentUser.getIdToken();

export const getAllCategories = () => {
    return getToken().then((token) =>
        fetch(`${baseUrl}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.json()));
};

export const addCategory = (categoryObj) => {
    return getToken().then((token) => {
        fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoryObj)
        }).then((res) => res.json());
    })
}

export const deleteCategory = (id) => {
    return getToken().then((token) => {
        fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((res) => res.json());
    })
}