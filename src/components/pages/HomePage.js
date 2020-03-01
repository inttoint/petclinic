import React from 'react';
import whiteCat from '../../img/britan.jpg';
import Header from '../app/header';
import HeaderIntro from '../app/header/header-intro';
import titles from '../../mocks/titles';

const HomePage = () => {
  const { firstTitle, secondTitle } = titles.find(
    title => title.location === 'home'
  );
  return (
    <div>
      <Header backgroundImage={whiteCat}>
        <HeaderIntro firstTitle={firstTitle} secondTitle={secondTitle} />
      </Header>
    </div>
  );
};

export default HomePage;
