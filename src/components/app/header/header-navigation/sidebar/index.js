import React from 'react';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from '../../../../../redux/selectors';
import { signOutUser } from '../../../../../redux/ac';
import { ReactComponent as ProfileIcon } from '../profile.svg';
import { StyledLink } from '../../../../common/links/link.styled';
import { SidebarContainer, SidebarMenu } from './sidebar.styled';
import {
  PrimaryButton,
  PrimaryButtonWithIcon
} from '../../../../common/buttons/button.styled';
import { useHistory } from 'react-router-dom';

const Sidebar = ({ isOpen, isUserAuthorized, signOutUser }) => {
  const history = useHistory();
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
              <PrimaryButtonWithIcon onClick={() => history.push('/users')}>
                <ProfileIcon />
                Личный кабинет
              </PrimaryButtonWithIcon>
            ) : (
              <StyledLink to="/auth/sign-in">Вход</StyledLink>
            )}
          </li>
          {isUserAuthorized && (
            <li>
              <PrimaryButton onClick={signOutUser}>Выход</PrimaryButton>
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
