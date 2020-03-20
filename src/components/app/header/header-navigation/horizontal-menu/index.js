import React from 'react';
import { ReactComponent as ProfileIcon } from '../profile.svg';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../../../../redux/selectors';
import {
  LinkDefault,
  LinkSecondary
} from '../../../../common/links/link.styled';
import { HeaderMenu } from './horizontal-menu.styled';

const HorizontalMenu = ({ isUserAuthorized }) => {
  return (
    <HeaderMenu>
      <ul>
        <li>
          <LinkDefault to="/about">О нас</LinkDefault>
        </li>
        <li>
          <LinkDefault to="/services">Услуги</LinkDefault>
        </li>
        <li>
          <LinkDefault to="/reviews">Отзывы</LinkDefault>
        </li>
        <li>
          <LinkDefault to="/contacts">Контакты</LinkDefault>
        </li>
        <li>
          {isUserAuthorized ? (
            <LinkSecondary to="/users">
              <ProfileIcon />
              Личный кабинет
            </LinkSecondary>
          ) : (
            <LinkDefault to="/auth/sign-in">Вход</LinkDefault>
          )}
        </li>
      </ul>
    </HeaderMenu>
  );
};

export default connect(state => ({
  isUserAuthorized: isUserAuthorizedSelector(state)
}))(HorizontalMenu);
