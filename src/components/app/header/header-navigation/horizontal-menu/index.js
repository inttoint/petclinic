import React from 'react';
import { ReactComponent as ProfileIcon } from '../profile.svg';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../../../../redux/selectors';
import { StyledLink, PrimaryLink } from '../../../../common/links/link.styled';
import { HeaderMenu } from './horizontal-menu.styled';

const HorizontalMenu = ({ isUserAuthorized }) => {
  return (
    <HeaderMenu>
      <ul>
        <li>
          <StyledLink to="/about">О нас</StyledLink>
        </li>
        <li>
          <StyledLink to="/services">Услуги</StyledLink>
        </li>
        <li>
          <StyledLink to="/reviews">Отзывы</StyledLink>
        </li>
        <li>
          <StyledLink to="/contacts">Контакты</StyledLink>
        </li>
        <li>
          {isUserAuthorized ? (
            <PrimaryLink to="/users">
              <ProfileIcon />
              Личный кабинет
            </PrimaryLink>
          ) : (
            <StyledLink to="/auth/sign-in">Вход</StyledLink>
          )}
        </li>
      </ul>
    </HeaderMenu>
  );
};

export default connect(state => ({
  isUserAuthorized: isUserAuthorizedSelector(state)
}))(HorizontalMenu);
