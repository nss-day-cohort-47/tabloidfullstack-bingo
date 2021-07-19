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
export const getAllUserProfilesDeactive = () => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/Deactivated`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.json()));
};

//! NEEDS WORK
export const DeactivateUser = (id) => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        //.then((res) => res.json())
    );
}

//! NEEDS WORK
export const ActivateUser = (id) => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        //.then((res) => res.json())
    );
}


export const getUserProfile = (id) => {
    return fetch(`${baseUrl}/UserProfile/${id}`).then((res) => res.json());
};
