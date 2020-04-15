import React from 'react';
import whiteCat from '../../assets/images/background/britan.jpg';
import Header from '../header';
import HeaderIntro from '../header/header-intro';
import { getTitles } from '../../mocks/titles';

const HomePage = () => {
  const { firstTitle, secondTitle } = getTitles('home');
  return (
    <div>
      <Header backgroundImage={whiteCat}>
        <HeaderIntro firstTitle={firstTitle} secondTitle={secondTitle} />
      </Header>
    </div>
  );
};

export default HomePage;
