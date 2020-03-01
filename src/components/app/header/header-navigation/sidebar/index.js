import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './sidebar.scss';
import { isUserAuthorizedSelector } from '../../../../../redux/selectors';
import { signOutUserRequest } from '../../../../../redux/ac';

const Sidebar = ({ isOpen, isUserAuthorized, signOutUserRequest }) => {
  const style = { opacity: isOpen ? 1 : 0, display: isOpen ? 'block' : 'none' };

  return (
    <div className="sidebar__container" style={style}>
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
            {isUserAuthorized ? (
              <button
                className="header__menu--button"
                onClick={signOutUserRequest}>
                Выход
              </button>
            ) : (
              <Link to="/auth/sign-in" className="sidebar__menu--link">
                Вход
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default connect(
  state => ({
    isUserAuthorized: isUserAuthorizedSelector(state)
  }),
  { signOutUserRequest }
)(Sidebar);
