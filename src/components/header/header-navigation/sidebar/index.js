import React from 'react';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../../../redux/selectors';
import { signOutUser } from '../../../../redux/ac';
import { ReactComponent as ProfileIcon } from '../../../../assets/images/icons/profile.svg';
import { SLink } from '../../../common/link.styled';
import { SSidebarContainer, SSidebarMenu } from './sidebar.styled';
import { SButton, SButtonWithIcon } from '../../../common/button.styled';
import { useHistory } from 'react-router-dom';

const Sidebar = ({ isOpen, isUserAuthorized, signOutUser }) => {
  const history = useHistory();
  return (
    <SSidebarContainer isOpen={isOpen}>
      <SSidebarMenu>
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
          {isUserAuthorized && (
            <li>
              <SButton onClick={signOutUser}>Выход</SButton>
            </li>
          )}
        </ul>
      </SSidebarMenu>
    </SSidebarContainer>
  );
};

export default connect(
  state => ({
    isUserAuthorized: isUserAuthorizedSelector(state)
  }),
  { signOutUser }
)(Sidebar);
