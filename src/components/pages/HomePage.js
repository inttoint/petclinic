import React from 'react';
import whiteCat from '../../img/britan.jpg';
import Header from '../app/header';
import HeaderIntro from '../app/header/header-intro';

const HomePage = () => {
  return (
    <div>
      <Header backgroundImage={whiteCat}>
        <HeaderIntro />
      </Header>
    </div>
  );
};

export default HomePage;
