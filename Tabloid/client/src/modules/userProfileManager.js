import firebase from "firebase/app";
import "firebase/auth";

const baseUrl = '/api/UserProfile';
export const getToken = () => firebase.auth().currentUser.getIdToken();

export const getAllUserProfiles = () => {
    return getToken().then((token) =>
        fetch(`${baseUrl}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.json()));
};
export const getUserProfile = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};
