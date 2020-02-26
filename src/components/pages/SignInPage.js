import React from 'react';
import Header from '../app/header';
import catWithMac from '../../img/PajdTsgda.jpg';
import SignInForm from '../forms/sign-in-form';

const SignInPage = () => {
  return (
    <div>
      <Header backgroundImage={catWithMac}>
        <SignInForm />
      </Header>
      <h4>SignIn Page</h4>
    </div>
  );
};

export default SignInPage;
