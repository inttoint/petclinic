import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from './noun_primary50_.png';

const Header = () => {
  return (
    <div className="bg-full">
      <div className="inner-shadow">
        <header className="header">
          <div className="header__logo">
            <Link to="#" className="header__logo--link">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header__burger" />
          <nav className="header__menu">
            <ul>
              <li>
                <Link to="#" className="header__menu--link">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="#" className="header__menu--link">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="#" className="header__menu--link">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="#" className="header__menu--link">
                  Контакты
                </Link>
              </li>
              <li>
                <button className="btn red-btn">Вход</button>
              </li>
            </ul>
          </nav>
        </header>
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
