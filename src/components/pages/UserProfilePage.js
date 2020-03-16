import React from 'react';
import Header from '../app/header';
import image from './dp2m5glF2Y4.jpg';
import UserProfile from '../profile';
import HeaderIntro from '../app/header/header-intro';
import { getTitles } from '../../mocks/titles';
import { connect } from 'react-redux';
import { getLoginCredentials } from '../../redux/selectors';
import Spinner from '../common/spinner';

const UserProfilePage = ({ credentials }) => {
  if (!credentials) return <Spinner />;

  const { firstTitle, secondTitle } = getTitles('profile');
  return (
    <div>
      <Header backgroundImage={image}>
        <HeaderIntro firstTitle={firstTitle} secondTitle={secondTitle} />
      </Header>
      <UserProfile userUid={credentials.uid} />
    </div>
  );
};

export default connect(state => ({
  credentials: getLoginCredentials(state)
}))(UserProfilePage);
