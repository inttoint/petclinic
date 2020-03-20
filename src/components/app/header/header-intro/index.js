import React from 'react';
import DividerLine from '../../../common/divider';

import { Container, MainTitle, SecondaryTitle } from './header-intro.styled';

const HeaderIntro = ({ firstTitle, secondTitle }) => {
  return (
    <Container>
      <MainTitle>{firstTitle}</MainTitle>
      <DividerLine />
      <SecondaryTitle>{secondTitle}</SecondaryTitle>
    </Container>
  );
};

export default HeaderIntro;
