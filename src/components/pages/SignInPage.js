import React, { Component } from 'react';
import Header from '../app/header';
import catWithMac from '../../img/PajdTsgda.jpg';
import SignInForm from '../forms/sign-in-form';
import { signInUserRequest } from '../../redux/ac';
import { connect } from 'react-redux';

class SignInPage extends Component {
  render() {
    return (
      <div>
        <Header backgroundImage={catWithMac}>
          <SignInForm handleSubmit={this.handleSignIn} />
        </Header>
      </div>
    );
  }

  handleSignIn = user => this.props.signInUserRequest(user);
}

export default connect(null, { signInUserRequest })(SignInPage);
