import React, { useState } from 'react';
import logo from '../../../assets/images/logo_cat_dog.png';
import { SHeaderNav } from './header-navigation.styled';
import Sidebar from './sidebar';
import Burger from './burger';
import HorizontalMenu from './horizontal-menu';
import Logo from './logo';

const HeaderNavigation = () => {
  const [isSidebarOpen, toggleSidebar] = useState(false);

  return (
    <SHeaderNav>
      <Logo image={logo} />
      <HorizontalMenu />
      <Burger isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </SHeaderNav>
  );
};

export default HeaderNavigation;
