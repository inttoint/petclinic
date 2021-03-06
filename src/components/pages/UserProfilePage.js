import React from 'react';
import Header from '../header';
import image from '../../assets/images/background/dp2m5glF2Y4.jpg';
import UserProfile from '../user-profile';
import HeaderIntro from '../header/header-intro';
import { getTitles } from '../../mocks/titles';
import { connect } from 'react-redux';
import { getLoginCredentials } from '../../redux/selectors';
import Loader from '../common/loader';

const UserProfilePage = ({ credentials }) => {
  if (!credentials) return <Loader />;

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
