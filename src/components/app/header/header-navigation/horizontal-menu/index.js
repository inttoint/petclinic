import React from 'react';
import { Link } from 'react-router-dom';
import './horizontal-menu.scss';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../../../../redux/selectors';
import { signOutUserRequest } from '../../../../../redux/ac';

const HorizontalMenu = ({ isUserAuthorized, signOutUserRequest }) => {
  return (
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
  );
};

export default connect(
  state => ({
    isUserAuthorized: isUserAuthorizedSelector(state)
  }),
  { signOutUserRequest }
)(HorizontalMenu);
