import React, { Component } from 'react';
import Header from '../app/header';
import catWithMac from '../../img/PajdTsgda.jpg';
import SignInForm from '../forms/sign-in-form';
import { signInUserRequest } from '../../redux/ac';
import { connect } from 'react-redux';
import { authLoadingSelector } from '../../redux/selectors';
import Spinner from '../common/spinner';

class SignInPage extends Component {
  render() {
    const { isLoading } = this.props;

    return (
      <div>
        <Header backgroundImage={catWithMac}>
          <SignInForm handleSubmit={this.handleSignIn} />
          {isLoading && <Spinner />}
        </Header>
      </div>
    );
  }

  handleSignIn = user => this.props.signInUserRequest(user);
}

export default connect(
  state => ({
    isLoading: authLoadingSelector(state)
  }),
  { signInUserRequest }
)(SignInPage);
