import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import NewReview from './NewReview'
import Home from './Home.js';
import Area from './Area';
import SignUp from './Signmeup.js'
import Register from './Register.js'

const Content = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
	  <Route exact path="/" component={Home} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/newreview" component={NewReview} />
    <Route exact path="/area" component={Area} />
    <Route exact path="/register" component={Register} />
  </Switch>
);

export default Content;
