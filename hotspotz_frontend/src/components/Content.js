import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home.js';
import Area from './Area';

const Content = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
	<Route exact path="/" component={Home} />
    <Route exact path="/area" component={Area} />
  </Switch>
);

export default Content;
