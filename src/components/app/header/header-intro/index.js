import React from 'react';
import './header-intro.scss';

const HeaderIntro = ({ firstTitle, secondTitle }) => {
  return (
    <div className="intro">
      <h1>{firstTitle}</h1>
      <div className="divider" />
      <h5>{secondTitle}</h5>
    </div>
  );
};

export default HeaderIntro;
