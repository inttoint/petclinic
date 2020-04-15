import React from 'react';
import dog from '../../assets/images/background/adK3Vu70DEQ.jpg';
import Header from '../header';
import HeaderIntro from '../header/header-intro';
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
