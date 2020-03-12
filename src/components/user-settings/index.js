import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserDetailsRequest, signOutUserRequest } from '../../redux/ac';
import './user-settings.scss';
import EditProfileForm from '../forms/edit-profile-form';
import { authUserDetailsSelector } from '../../redux/selectors';
import Spinner from '../common/spinner';

class UserSettings extends Component {
  render() {
    const { signOutUserRequest, userDetails } = this.props;
    if (!userDetails) return <Spinner />;

    return (
      <div className="container">
        <h1>Настройки профиля</h1>
        <EditProfileForm
          handleSubmit={this.saveUserInfo}
          details={userDetails}
        />

        <button className="btn sign-out" onClick={signOutUserRequest}>
          Выйти из профиля
        </button>
      </div>
    );
  }

  saveUserInfo = values => this.props.addUserDetailsRequest(values);
}

export default connect(
  state => ({
    userDetails: authUserDetailsSelector(state)
  }),
  {
    signOutUserRequest,
    addUserDetailsRequest
  }
)(UserSettings);
