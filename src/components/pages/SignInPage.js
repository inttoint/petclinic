import React, { Component } from 'react';
import Header from '../app/header';
import catWithMac from '../../img/PajdTsgda.jpg';
import SignInForm from '../forms/sign-in-form';

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

  handleSignIn = ({ email, password }) => {
    console.log(email, password);
  };
}

export default SignInPage;
