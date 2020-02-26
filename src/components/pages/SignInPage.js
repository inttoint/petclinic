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
    </div>
  );
};

export default SignInPage;
