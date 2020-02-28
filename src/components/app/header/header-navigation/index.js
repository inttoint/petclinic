import React from 'react';
import { Link } from 'react-router-dom';
import logo from './noun_primary50_.png';
import './header-navigation.scss';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../../../redux/selectors';
import { signOutUserRequest } from '../../../../redux/ac';

const HeaderNavigation = ({ isUserAuthorized, signOutUserRequest }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="header__logo--link">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="header__burger">
        <span />
        <span />
        <span />
      </div>
      <nav className="header__menu">
        <ul>
          <li>
            <Link to="#" className="header__menu--link">
              О нас
            </Link>
          </li>
          <li>
            <Link to="#" className="header__menu--link">
              Услуги
            </Link>
          </li>
          <li>
            <Link to="#" className="header__menu--link">
              Отзывы
            </Link>
          </li>
          <li>
            <Link to="#" className="header__menu--link">
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
              <Link to="/sign-in" className="header__menu--link">
                Вход
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default connect(
  state => ({
    isUserAuthorized: isUserAuthorizedSelector(state)
  }),
  { signOutUserRequest }
)(HeaderNavigation);
