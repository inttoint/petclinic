import React from 'react';
import DividerLine from '../../../common/divider';

import { HeaderContainer, SecondaryTitle } from './header-intro.styled';
import { MainTitle } from '../../../common/titles/titles.styled';

const HeaderIntro = ({ firstTitle, secondTitle }) => {
  return (
    <HeaderContainer>
      <MainTitle>{firstTitle}</MainTitle>
      <DividerLine />
      <SecondaryTitle>{secondTitle}</SecondaryTitle>
    </HeaderContainer>
  );
};

export default HeaderIntro;
