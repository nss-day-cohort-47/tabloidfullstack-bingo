import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import TagList from "./tag/TagList";

import UserProfileList from "./userProfile/UserProfileList";
import UserProfileDetails from "./userProfile/UserProfileDetails";
import UserProfileDeactiveList from "./userProfile/UserProfileDeactiveList";
import { getCurrentUserType } from '../modules/userProfileManager';

import CategoryList from "./categories/CategoryList";
import PostList from "./post/PostList";
import MyPosts from "./post/MyPosts";
import CommentList from "./comments/CommentList";
import CommentForm from "./comments/CommentForm";
import TagForm from "./tag/TagForm";
import CategoryForm from "./categories/CategoryForm";
import EditCategory from "./categories/CategoryEdit";

import PostDetails from "./post/PostDetails";
import PostForm from "./post/PostForm";
import TagDelete from "./tag/TagDelete";
import TagEdit from "./tag/TagEdit";
import EditPost from "./post/EditPost";

export default function ApplicationViews({ isLoggedIn }) {
  const [isAdmin, setIsAdmin] = useState(true);

  const userIsAdmin = () => {
    getCurrentUserType().then((userType) => {
      if (userType.name == "Admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false)
      }
    });
  };
  useEffect(() => {
    if (isLoggedIn) {
      userIsAdmin();
    }
  }, [isLoggedIn]);

  return (

    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/myPosts">
          <MyPosts />
        </Route>

        <Route path='/NewPost' exact>
          {isLoggedIn ? <PostForm /> : <Redirect to='/login' />}
        </Route>

        <Route path="/post/:id" exact>
          {isLoggedIn ? <PostDetails /> : <Redirect to='/login' />}
        </Route>

        <Route path="/post/edit/:id" exact>
          {isLoggedIn ? <EditPost /> : <Redirect to='/login' />}
        </Route>

        <Route path="/categories">
          {isLoggedIn ? <CategoryList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/Category/create">
          {isLoggedIn ? <CategoryForm /> : <Redirect to="/login" />}
        </Route>
        <Route path="/Category/edit/:id">
          {isLoggedIn ? <EditCategory /> : <Redirect to="/login" />}
        </Route>
        {/* <Route path="/posts">
          <PostList />
        </Route> */}
        <Route path="/UserProfiles" exact>
          {isLoggedIn && isAdmin ? <UserProfileList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/UserProfiles/Deactivated" exact>
          {isLoggedIn && isAdmin ? <UserProfileDeactiveList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/post/:id(\d+)/comments" exact>
          {isLoggedIn ? <CommentList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/post/:id(\d+)/comments/add">
          {isLoggedIn ? <CommentForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/UserProfiles/:id">
          {isLoggedIn && isAdmin ? <UserProfileDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/tag" exact>
          <TagList />
        </Route>

        <Route path="/tag/add" exact>
          <TagForm />
        </Route>

        <Route path="/tag/delete/:id" exact>
          <TagDelete />
        </Route>

        <Route path="/tag/edit/:id" exact>
          <TagEdit />
        </Route>

      </Switch>
    </main >

  );
};
