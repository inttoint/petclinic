import React, { Component } from 'react';
import Header from '../app/header';
import catWithMac from '../../img/PajdTsgda.jpg';
import SignInForm from '../forms/sign-in-form';
import { signInUserRequest, signUpUserRequest } from '../../redux/ac';
import { connect } from 'react-redux';
import { authLoadingSelector } from '../../redux/selectors';
import Spinner from '../common/spinner';
import SignUpForm from '../forms/sign-up-form';
import { Route } from 'react-router-dom';

class AuthPage extends Component {
  render() {
    const { isLoading } = this.props;

    return (
      <div>
        <Header backgroundImage={catWithMac}>
          {/*<SignInForm handleSubmit={this.handleSignIn} />*/}
          <Route
            path="/auth/sign-in"
            render={() => <SignInForm handleSubmit={this.handleSignIn} />}
          />
          <Route
            path="/auth/sign-up"
            render={() => <SignUpForm handleSubmit={this.handleSignUp} />}
          />
          {isLoading && <Spinner />}
        </Header>
      </div>
    );
  }

  handleSignIn = user => this.props.signInUserRequest(user);
  handleSignUp = user => console.log(user);
}

export default connect(
  state => ({
    isLoading: authLoadingSelector(state)
  }),
  { signInUserRequest, signUpUserRequest }
)(AuthPage);
