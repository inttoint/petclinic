import React from 'react';
import IconBox from './icon-box';
import './profile.scss';
import PetList from '../pet-list';
import { Route } from 'react-router-dom';
import UserSettings from '../user-settings';

const Profile = () => {
  return (
    <div className="wrapper">
      <div className="main-controls">
        <div className="main-controls__left">
          <Route path="/profile/pets" component={PetList} />
          <Route path="/profile/settings" component={UserSettings} />
        </div>
        <div className="main-controls__right">
          <div className="outer-shadow">
            <IconBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
