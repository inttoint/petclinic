import React from 'react';
import { ReactComponent as ProfileIcon } from '../../../../assets/images/icons/profile.svg';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../../../redux/selectors';
import { SHeaderMenu } from './horizontal-menu.styled';
import { SButtonWithIcon } from '../../../common/button.styled';
import { useHistory } from 'react-router-dom';
import { SLink } from '../../../common/link.styled';

const HorizontalMenu = ({ isUserAuthorized }) => {
  const history = useHistory();

  return (
    <SHeaderMenu>
      <ul>
        <li>
          <SLink to="/about">О нас</SLink>
        </li>
        <li>
          <SLink to="/services">Услуги</SLink>
        </li>
        <li>
          <SLink to="/reviews">Отзывы</SLink>
        </li>
        <li>
          <SLink to="/contacts">Контакты</SLink>
        </li>
        <li>
          {isUserAuthorized ? (
            <SButtonWithIcon onClick={() => history.push('/users')}>
              <ProfileIcon />
              Личный кабинет
            </SButtonWithIcon>
          ) : (
            <SLink to="/auth/sign-in">Вход</SLink>
          )}
        </li>
      </ul>
    </SHeaderMenu>
  );
};

export default connect(state => ({
  isUserAuthorized: isUserAuthorizedSelector(state)
}))(HorizontalMenu);
