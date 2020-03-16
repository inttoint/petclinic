import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../redux/selectors';
import UserProfilePage from '../pages/UserProfilePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ReviewsPage from '../pages/ReviewsPage';
import ContactsPage from '../pages/ContactsPage';

const App = ({ isUserAuthorized }) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/contacts" component={ContactsPage} />

        {!isUserAuthorized && <Route path="/auth" component={AuthPage} />}
        <Route path="/users" component={UserProfilePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default connect(state => ({
  isUserAuthorized: isUserAuthorizedSelector(state)
}))(App);
