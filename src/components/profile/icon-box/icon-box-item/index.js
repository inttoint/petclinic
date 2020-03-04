import React from 'react';
import './icon-box-item.scss';
import { Link } from 'react-router-dom';

const IconBoxItem = ({ url, Icon, title }) => {
  return (
    <div className="icon-box__item">
      <Link to={url} className="icon-box__item--link">
        <Icon />
        <h5>{title}</h5>
      </Link>
    </div>
  );
};

export default IconBoxItem;
