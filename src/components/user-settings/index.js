import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserDetails, signOutUser } from '../../redux/ac';
import EditProfileForm from '../forms/edit-profile-form';
import {
  authUserDetailsSelector,
  userIsLoadingSelector
} from '../../redux/selectors';
import Loader from '../common/loader';
import { Button } from '../common/buttons/button.styled';
import { MainTitle } from '../common/titles/titles.styled';
import { Container } from '../common/containers.styled';

class UserSettings extends Component {
  render() {
    const { signOutUser, userDetails, isLoading } = this.props;
    if (isLoading || !userDetails) return <Loader />;

    return (
      <Container>
        <MainTitle>Настройки профиля</MainTitle>
        <EditProfileForm
          handleSubmit={this.saveUserInfo}
          details={userDetails}
        />

        <Button width="auto" onClick={signOutUser} secondary>
          Выйти из профиля
        </Button>
      </Container>
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
