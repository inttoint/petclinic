import React from 'react';

import { SHeaderContainer, SSecondaryTitle } from './header-intro.styled';
import { SMainTitle } from '../../common/titles.styled';
import { SDivider } from '../../common/divider.styled';

const HeaderIntro = ({ firstTitle, secondTitle }) => {
  return (
    <SHeaderContainer>
      <SMainTitle>{firstTitle}</SMainTitle>
      <SDivider />
      <SSecondaryTitle>{secondTitle}</SSecondaryTitle>
    </SHeaderContainer>
  );
};

export default HeaderIntro;
