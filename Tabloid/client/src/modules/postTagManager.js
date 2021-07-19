import firebase from "firebase/app";
import "firebase/auth";

const baseUrl = '/api/postTag';

export const getToken = () => firebase.auth().currentUser.getIdToken();

// export const getAllPostTags = () => {
//   return getToken().then((token) =>
//     fetch(`${baseUrl}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }))
// };

// export const deletePostTag = (id) => {
//   return getToken().then((token) =>
//     fetch(`${baseUrl}/delete/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(id),
//     })).then(resp => resp.json())
// };