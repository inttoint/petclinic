import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ProfileIcon } from '../profile.svg';
import './horizontal-menu.scss';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../../../../redux/selectors';
import { signOutUserRequest } from '../../../../../redux/ac';

const HorizontalMenu = ({ isUserAuthorized, signOutUserRequest }) => {
  return (
    <nav className="header__menu">
      <ul>
        <li>
          <Link to="#" className="header__menu--link primary-link">
            О нас
          </Link>
        </li>
        <li>
          <Link to="#" className="header__menu--link primary-link">
            Услуги
          </Link>
        </li>
        <li>
          <Link to="#" className="header__menu--link primary-link">
            Отзывы
          </Link>
        </li>
        <li>
          <Link to="#" className="header__menu--link primary-link">
            Контакты
          </Link>
        </li>
        <li>
          {isUserAuthorized ? (
            <Link
              to="/profile/pets"
              className="header__menu--secondary-link secondary-link">
              <ProfileIcon />
              Личный кабинет
            </Link>
          ) : (
            <Link
              to="/auth/sign-in"
              className="header__menu--link primary-link">
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
