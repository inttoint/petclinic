import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserDetails, signOutUser } from '../../redux/ac';
import EditProfileForm from '../forms/edit-profile-form';
import {
  authUserDetailsSelector,
  userIsLoadingSelector
} from '../../redux/selectors';
import Loader from '../common/loader';
import { SButton } from '../common/button.styled';
import { SMainTitle } from '../common/titles.styled';
import { SContainer } from '../common/containers.styled';

class UserSettings extends Component {
  render() {
    const { signOutUser, userDetails, isLoading } = this.props;
    if (isLoading || !userDetails) return <Loader />;

    return (
      <SContainer>
        <SMainTitle>Настройки профиля</SMainTitle>
        <EditProfileForm
          handleSubmit={this.saveUserInfo}
          details={userDetails}
        />

        <SButton width="auto" onClick={signOutUser} secondary>
          Выйти из профиля
        </SButton>
      </SContainer>
    );
  }

  saveUserInfo = values => this.props.addUserDetails(values);
}

export default connect(
  state => ({
    userDetails: authUserDetailsSelector(state),
    isLoading: userIsLoadingSelector(state)
  }),
  {
    signOutUser,
    addUserDetails
  }
)(UserSettings);
