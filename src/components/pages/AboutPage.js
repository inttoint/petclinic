import React from 'react';
import littleCat from '../../assets/images/background/iLMBhGenerg.jpg';
import Header from '../header';
import HeaderIntro from '../header/header-intro';
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
