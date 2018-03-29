import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home.js';


const Content = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
	<Route exact path="/" component={Home} />
  </Switch>
);

export default Content;
