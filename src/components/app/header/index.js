import React from 'react';
import HeaderNavigation from './header-navigation';
import './header.scss';

const Header = ({ backgroundImage, children }) => {
  const bgStyles = { backgroundImage: `url(${backgroundImage})` };

  return (
    <div className="bg-full" style={bgStyles}>
      <div className="inner-shadow">
        <HeaderNavigation />
        {children}
      </div>
    </div>
  );
};

export default Header;
