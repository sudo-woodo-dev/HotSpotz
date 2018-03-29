import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import NewReview from './NewReview'

const Content = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
	  <Route exact path="/" component={Home} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/" component={Home} />
    <Route exact path="/newreview" component={NewReview} />
  </Switch>
);

export default Content;
