import React, { Component } from 'react';
import Header from '../app/header';
import catWithMac from '../../img/PajdTsgda.jpg';
import SignInForm from '../forms/sign-in-form';
import { signInUser, signUpUser } from '../../redux/ac';
import { connect } from 'react-redux';
import { authLoadingSelector } from '../../redux/selectors';
import Loader from '../common/loader';
import SignUpForm from '../forms/sign-up-form';
import { Route } from 'react-router-dom';

class AuthPage extends Component {
  render() {
    const { isLoading } = this.props;

    return (
      <div>
        <Header backgroundImage={catWithMac}>
          <Route
            path="/auth/sign-in"
            render={() => <SignInForm handleSubmit={this.handleSignIn} />}
          />
          <Route
            path="/auth/sign-up"
            render={() => <SignUpForm handleSubmit={this.handleSignUp} />}
          />
          {isLoading && <Loader />}
        </Header>
      </div>
    );
  }

  handleSignIn = user => this.props.signInUser(user);
  handleSignUp = user => this.props.signUpUser(user);
}

export default connect(
  state => ({
    isLoading: authLoadingSelector(state)
  }),
  { signInUser, signUpUser }
)(AuthPage);
