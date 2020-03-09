import React from 'react';
import dog from '../../img/aisadn129.jpg';
import Header from '../app/header';
import HeaderIntro from '../app/header/header-intro';
import { getTitles } from '../../mocks/titles';

const ServicesPage = () => {
  const { firstTitle, secondTitle } = getTitles('services');
  return (
    <div>
      <Header backgroundImage={dog}>
        <HeaderIntro firstTitle={firstTitle} secondTitle={secondTitle} />
      </Header>
    </div>
  );
};

export default ServicesPage;
