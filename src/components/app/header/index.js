import React from 'react';
import HeaderNavigation from './header-navigation';
import './header.scss';
import Sidebar from './sidebar';

const Header = ({ backgroundImage, children }) => {
  const bgStyles = { backgroundImage: `url(${backgroundImage})` };

  return (
    <div className="bg-full" style={bgStyles}>
      <div className="inner-shadow">
        <HeaderNavigation />
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Header;
