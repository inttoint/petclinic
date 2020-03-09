import React from 'react';
import littleCat from '../../img/alvan-nee.jpg';
import Header from '../app/header';
import HeaderIntro from '../app/header/header-intro';
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
