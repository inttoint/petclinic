import React from 'react';
import Header from '../app/header';
import catWithMac from '../../img/PajdTsgda.jpg';
import LoginForm from '../forms/login-form';

const LoginPage = () => {
  return (
    <div>
      <Header backgroundImage={catWithMac}>
        <LoginForm />
      </Header>
      <h4>LoginPage</h4>
    </div>
  );
};

export default LoginPage;
