import React from 'react';
import './header-intro.scss';
import DividerLine from '../../../common/divider';

const HeaderIntro = ({ firstTitle, secondTitle }) => {
  return (
    <div className="intro">
      <h1>{firstTitle}</h1>
      <DividerLine />
      <h5>{secondTitle}</h5>
    </div>
  );
};

export default HeaderIntro;
