import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserDetailsRequest, signOutUserRequest } from '../../redux/ac';
import './user-settings.scss';
import EditProfileForm from '../forms/edit-profile-form';

class UserSettings extends Component {
  render() {
    const { signOutUserRequest } = this.props;

    return (
      <div className="container">
        <h1>Настройки профиля</h1>
        <EditProfileForm handleSubmit={this.saveUserInfo} />

        <button className="btn sign-out" onClick={signOutUserRequest}>
          Выйти из профиля
        </button>
      </div>
    );
  }

  saveUserInfo = values => this.props.addUserDetailsRequest(values);
}

export default connect(null, { signOutUserRequest, addUserDetailsRequest })(
  UserSettings
);
