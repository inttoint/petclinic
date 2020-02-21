import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="#" className="header__logo">
        P|C
      </Link>
      <nav>
        <ul className="header__menu">
          <li>
            <Link to="#" className="link">
              Услуги и цены
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              Галерея
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              Контакты
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
