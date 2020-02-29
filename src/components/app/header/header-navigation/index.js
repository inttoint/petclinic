import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo/noun_primary50_.png';
import './header-navigation.scss';
import Sidebar from './sidebar';
import Burger from './burger';
import HorizontalMenu from './horizontal-menu';
import Logo from './logo';

const HeaderNavigation = () => {
  const [isSidebarOpen, toggleSidebar] = useState(false);

  return (
    <header className="header">
      <Logo image={logo} />
      <HorizontalMenu />
      <div>
        <Burger isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </header>
  );
};

export default HeaderNavigation;
