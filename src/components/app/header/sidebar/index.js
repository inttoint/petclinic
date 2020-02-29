import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <nav className="sidebar__menu">
        <ul>
          <li>
            <Link to="#" className="sidebar__menu--link">
              О нас
            </Link>
          </li>
          <li>
            <Link to="#" className="sidebar__menu--link">
              Услуги
            </Link>
          </li>
          <li>
            <Link to="#" className="sidebar__menu--link">
              Отзывы
            </Link>
          </li>
          <li>
            <Link to="#" className="sidebar__menu--link">
              Контакты
            </Link>
          </li>
          <li>
            {/*{isUserAuthorized ? (*/}
            {/*  <button*/}
            {/*    className="header__menu--button"*/}
            {/*    onClick={signOutUserRequest}>*/}
            {/*    Выход*/}
            {/*  </button>*/}
            {/* ) : (*/}
            <Link to="/sign-in" className="sidebar__menu--link">
              Вход
            </Link>
            {/*)}*/}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
