import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import TagList from "./tag/TagList";

import UserProfileList from "./userProfile/UserProfileList";
import UserProfileDetails from "./userProfile/UserProfileDetails";
import UserProfileDeactiveList from "./userProfile/UserProfileDeactiveList";

import CategoryList from "./categories/CategoryList";
import PostList from "./post/PostList";
import MyPosts from "./post/MyPosts";
import CommentList from "./comments/CommentList";
import TagForm from "./tag/TagForm";
import CategoryForm from "./categories/CategoryForm";
import EditCategory from "./categories/CategoryEdit";

import PostDetails from "./post/PostDetails";
import TagDelete from "./tag/TagDelete";

export default function ApplicationViews({ isLoggedIn }) {

  return (

    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/myPosts">
          <MyPosts />
        </Route>

        <Route path="/post/:id" exact>
          <PostDetails />
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
          {isLoggedIn ? <UserProfileList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/UserProfiles/Deactivated" exact>
          {isLoggedIn ? <UserProfileDeactiveList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/post/:id(\d+)/comments">
          {isLoggedIn ? <CommentList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/UserProfiles/:id">
          {isLoggedIn ? <UserProfileDetails /> : <Redirect to="/login" />}
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

      </Switch>
    </main >

  );
};
