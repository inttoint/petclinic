import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './sidebar.scss';
import { isUserAuthorizedSelector } from '../../../../../redux/selectors';
import { signOutUserRequest } from '../../../../../redux/ac';
import { ReactComponent as ProfileIcon } from '../profile.svg';

const Sidebar = ({ isOpen, isUserAuthorized, signOutUserRequest }) => {
  const style = { opacity: isOpen ? 1 : 0, display: isOpen ? 'block' : 'none' };

  return (
    <div className="sidebar__container" style={style}>
      <nav className="sidebar__menu">
        <ul>
          <li>
            <Link to="/about" className="sidebar__menu--link">
              О нас
            </Link>
          </li>
          <li>
            <Link to="/services" className="sidebar__menu--link">
              Услуги
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="sidebar__menu--link">
              Отзывы
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="sidebar__menu--link">
              Контакты
            </Link>
          </li>
          <li>
            {isUserAuthorized ? (
              <Link
                to="/profile/pets"
                className="sidebar__menu--secondary-link">
                <ProfileIcon />
                Личный кабинет
              </Link>
            ) : (
              <Link to="/auth/sign-in" className="sidebar__menu--link">
                Вход
              </Link>
            )}
          </li>
          {isUserAuthorized && (
            <li>
              <button className="red-btn" onClick={signOutUserRequest}>
                Выход
              </button>
            </li>
          )}
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
