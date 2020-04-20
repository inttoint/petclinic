import React from 'react';
import HeaderNavigation from './header-navigation';
import { SImageBackground, SInnerShadow } from './header.styled';

const Header = ({ backgroundImage, children }) => {
  return (
    <SImageBackground bg={backgroundImage}>
      <SInnerShadow>
        <HeaderNavigation />
        {children}
      </SInnerShadow>
    </SImageBackground>
  );
};

export default Header;
