import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ image }) => {
  return (
    <div className="header__logo">
      <Link to="/" className="header__logo--link">
        <img src={image} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
