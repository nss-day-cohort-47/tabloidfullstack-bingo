import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import TagList from "./tag/TagList";

import UserProfileList from "./userProfile/UserProfileList";
import UserProfileDetails from "./userProfile/UserProfileDetails";
import CategoryList from "./CategoryList";
import PostList from "./post/PostList";
import MyPosts from "./post/MyPosts";
import CommentList from "./comments/CommentList";
import TagForm from "./tag/TagForm";
import CategoryForm from "./CategoryForm";
import PostDetails from "./post/PostDetails";

export default function ApplicationViews({ isLoggedIn }) {

  return (

    <main>
      <Switch>
        <Route path="/" exact>
          { isLoggedIn ? <PostList /> : <Redirect to="/login" /> }
        </Route>

        <Route path="/myPosts">
          <MyPosts />
        </Route>

        <Route path="/post/:id">
          <PostDetails />
        </Route>

        <Route path="/categories">
          { isLoggedIn ? <CategoryList /> : <Redirect to="/login" /> }
        </Route>
        <Route path="/Category/create">
          { isLoggedIn ? <CategoryForm /> : <Redirect to="/login" /> }
        </Route>
        {/* <Route path="/posts">
          <PostList />
        </Route> */}
        <Route path="/UserProfiles" exact>
          { isLoggedIn ? <UserProfileList /> : <Redirect to="/login" /> }
        </Route>

        <Route path="/comments">
          { isLoggedIn ? <CommentList /> : <Redirect to="/login" /> }
        </Route>

        <Route path="/UserProfiles/:id">
          { isLoggedIn ? <UserProfileDetails /> : <Redirect to="/login" /> }
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

      </Switch>
    </main>

  );
};
