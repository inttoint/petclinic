import React from 'react';
import Header from '../app/header';
import image from './dp2m5glF2Y4.jpg';
import Profile from '../profile';
import HeaderIntro from '../app/header/header-intro';
import { getTitles } from '../../mocks/titles';

const ProfilePage = () => {
  const { firstTitle, secondTitle } = getTitles('profile');
  return (
    <div>
      <Header backgroundImage={image}>
        <HeaderIntro firstTitle={firstTitle} secondTitle={secondTitle} />
      </Header>
      <Profile />
    </div>
  );
};

export default ProfilePage;
