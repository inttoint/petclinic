import React from 'react';
import './header.scss';
import HeaderNavigation from './header-navigation';

const Header = () => {
  return (
    <div className="bg-full">
      <div className="inner-shadow">
        <HeaderNavigation />
        <div className="intro">
          <h1>Что такое по-настоящему хорошая ветеринарная клиника?</h1>
          <div className="divider" />
          <h5>
            Это место, в котором вы всегда можете рассчитывать на эффективную
            помощь специалиста, квалифицированную консультацию и грамотное
            лечение животного
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
