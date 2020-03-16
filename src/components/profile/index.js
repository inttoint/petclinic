import React from 'react';
import IconBox from './icon-box';
import './user-profile.scss';
import PetList from '../pet-list';
import { Route } from 'react-router-dom';
import UserSettings from '../user-settings';

const UserProfile = ({ userUid }) => {
  return (
    <div className="wrapper">
      <div className="main-controls">
        <div className="main-controls__left">
          <Route path="/users/:id/pets" component={PetList} />
          <Route path="/users/:id/settings" component={UserSettings} />
        </div>
        <div className="main-controls__right">
          <div className="outer-shadow">
            <IconBox userUid={userUid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
