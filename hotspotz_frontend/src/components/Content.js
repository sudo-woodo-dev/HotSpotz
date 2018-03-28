import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';


const Content = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/profile" component={Profile} />
  </Switch>
);

export default Content;
