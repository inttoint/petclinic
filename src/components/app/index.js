import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import HomePage from '../pages/HomePage';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../redux/selectors';

const App = ({ isUserAuthorized }) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        {!isUserAuthorized && <Route path="/sign-in" component={SignInPage} />}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default connect(state => ({
  isUserAuthorized: isUserAuthorizedSelector(state)
}))(App);
