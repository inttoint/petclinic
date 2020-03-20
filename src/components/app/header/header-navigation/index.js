import React, { useState } from 'react';
import logo from './logo/noun_primary50_.png';
import { HeaderNav } from './header-navigation.styled';
import Sidebar from './sidebar';
import Burger from './burger';
import HorizontalMenu from './horizontal-menu';
import Logo from './logo';

const HeaderNavigation = () => {
  const [isSidebarOpen, toggleSidebar] = useState(false);

  return (
    <HeaderNav>
      <Logo image={logo} />
      <HorizontalMenu />
      <Burger isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </HeaderNav>
  );
};

export default HeaderNavigation;
