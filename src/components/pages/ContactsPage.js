import React from 'react';
import littleCat from '../../assets/images/background/alvan-nee.jpg';
import Header from '../header';
import HeaderIntro from '../header/header-intro';
import { getTitles } from '../../mocks/titles';

const ContactsPage = () => {
  const { firstTitle, secondTitle } = getTitles('contacts');
  return (
    <div>
      <Header backgroundImage={littleCat}>
        <HeaderIntro firstTitle={firstTitle} secondTitle={secondTitle} />
      </Header>
    </div>
  );
};

export default ContactsPage;
