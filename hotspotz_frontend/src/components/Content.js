import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';


const Content = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Content;
