import React from 'react';
import { connect } from 'react-redux';
import { signOutUserRequest } from '../../redux/ac';
import './user-settings.scss';
import EditProfileForm from '../forms/edit-profile-form';

const UserSettings = ({ signOutUserRequest }) => {
  return (
    <div className="container">
      <h1>Настройки профиля</h1>
      <EditProfileForm />

      <button className="btn sign-out" onClick={signOutUserRequest}>
        Выйти из профиля
      </button>
    </div>
  );
};

export default connect(null, { signOutUserRequest })(UserSettings);
