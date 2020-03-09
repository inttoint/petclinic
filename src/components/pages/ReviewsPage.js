import React from 'react';
import dog from '../../img/adK3Vu70DEQ.jpg';
import Header from '../app/header';
import HeaderIntro from '../app/header/header-intro';
import { getTitles } from '../../mocks/titles';

const ReviewsPage = () => {
  const { firstTitle, secondTitle } = getTitles('reviews');
  return (
    <div>
      <Header backgroundImage={dog}>
        <HeaderIntro firstTitle={firstTitle} secondTitle={secondTitle} />
      </Header>
    </div>
  );
};

export default ReviewsPage;
