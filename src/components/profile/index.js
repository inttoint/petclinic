import React from 'react';
import IconBox from './icon-box';
import TextContent from './text-content';
import './profile.scss';

const Profile = () => {
  return (
    <div className="wrapper">
      <div className="main-controls">
        <div className="main-controls__left">
          <TextContent />
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
