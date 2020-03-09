import React from 'react';
import littleCat from '../../img/iLMBhGenerg.jpg';
import Header from '../app/header';
import HeaderIntro from '../app/header/header-intro';
import { getTitles } from '../../mocks/titles';

const AboutPage = () => {
  const { firstTitle, secondTitle } = getTitles('about');
  return (
    <div>
      <Header backgroundImage={littleCat}>
        <HeaderIntro firstTitle={firstTitle} secondTitle={secondTitle} />
      </Header>
    </div>
  );
};

export default AboutPage;
