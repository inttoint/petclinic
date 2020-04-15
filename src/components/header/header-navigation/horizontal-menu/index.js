import React from 'react';
import { ReactComponent as ProfileIcon } from '../../../../assets/images/icons/profile.svg';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../../../redux/selectors';
import { StyledLink } from '../../../common/links/link.styled';
import { HeaderMenu } from './horizontal-menu.styled';
import { ButtonWithIcon } from '../../../common/buttons/button.styled';
import { useHistory } from 'react-router-dom';

const HorizontalMenu = ({ isUserAuthorized }) => {
  const history = useHistory();

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
            <ButtonWithIcon onClick={() => history.push('/users')}>
              <ProfileIcon />
              Личный кабинет
            </ButtonWithIcon>
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
