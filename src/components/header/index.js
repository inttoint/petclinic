import React from 'react';
import HeaderNavigation from './header-navigation';
import { ImageBackground, InnerShadow } from './header.styled';

const Header = ({ backgroundImage, children }) => {
  return (
    <ImageBackground bg={backgroundImage}>
      <InnerShadow>
        <HeaderNavigation />
        {children}
      </InnerShadow>
    </ImageBackground>
  );
};

export default Header;
