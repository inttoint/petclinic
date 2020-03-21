import React from 'react';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../../../../redux/selectors';
import { signOutUser } from '../../../../../redux/ac';
import { ReactComponent as ProfileIcon } from '../profile.svg';
import {
  StyledLink,
  SecondaryLink
} from '../../../../common/links/link.styled';
import { SidebarContainer, SidebarMenu } from './sidebar.styled';

const Sidebar = ({ isOpen, isUserAuthorized, signOutUser }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu>
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
              <SecondaryLink to="/users">
                <ProfileIcon />
                Личный кабинет
              </SecondaryLink>
            ) : (
              <StyledLink to="/auth/sign-in">Вход</StyledLink>
            )}
          </li>
          {isUserAuthorized && (
            <li>
              <SecondaryLink as="button" onClick={signOutUser}>
                Выход
              </SecondaryLink>
            </li>
          )}
        </ul>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default connect(
  state => ({
    isUserAuthorized: isUserAuthorizedSelector(state)
  }),
  { signOutUser }
)(Sidebar);
