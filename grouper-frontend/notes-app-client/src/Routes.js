import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Calendar from "./containers/Calendar";
import Files from "./containers/Files";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Messenger from "./containers/Messenger";
import Notes from "./containers/Notes";
import Scrum from "./containers/Scrum";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Settings from "./containers/Settings";
import NotFound from "./containers/NotFound";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path="/calendar" exact component={Calendar} appProps={appProps} />
      <AuthenticatedRoute path="/files" exact component={Files} appProps={appProps} />
      <AuthenticatedRoute path="/messenger" exact component={Messenger} appProps={appProps} />
      <AuthenticatedRoute path="/notes" exact component={Home} appProps={appProps} />
      <AuthenticatedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
      <AuthenticatedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
      <AuthenticatedRoute path="/scrum" exact component={Scrum} appProps={appProps} />
      <AuthenticatedRoute path="/settings" exact component={Settings} appProps={appProps} />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
