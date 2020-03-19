import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ image }) => {
  return (
    <div>
      <Link to="/">
        <img src={image} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
