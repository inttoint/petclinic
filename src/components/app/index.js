import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../redux/selectors';
import ProfilePage from '../pages/ProfilePage';

const App = ({ isUserAuthorized }) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        {!isUserAuthorized && <Route path="/auth" component={AuthPage} />}
        <Route path="/profile" component={ProfilePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default connect(state => ({
  isUserAuthorized: isUserAuthorizedSelector(state)
}))(App);
