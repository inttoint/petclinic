import React from 'react';
import { connect } from 'react-redux';
import { signOutUserRequest } from '../../redux/ac';
import './user-settings.scss';

const UserSettings = ({ signOutUserRequest }) => {
  return (
    <div className="container">
      <h1>Настройки профиля</h1>
      <button className="btn sign-out" onClick={signOutUserRequest}>
        Выйти
      </button>
    </div>
  );
};

export default connect(null, { signOutUserRequest })(UserSettings);
