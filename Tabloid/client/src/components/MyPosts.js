import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";

const MyPosts = () => {
  const [ user, setUser ] = useState();

  const currentUser = firebase.auth().currentUser;

  console.log('currentUser', currentUser)

  let currentUserId = '';
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log('firebase user', user.uid)
      setUser(user.uid);
    }
  })
}