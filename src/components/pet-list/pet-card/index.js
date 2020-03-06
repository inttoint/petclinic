import React, { useState } from 'react';
import avatar from './Avatar_cat.png';
import './pet-card.scss';

const PetCard = () => {
  const [isOpen, toggleCardActions] = useState(false);

  const activeClass = isOpen ? 'btn active' : 'btn';
  const openClass = isOpen ? 'box open' : 'box';

  return (
    <div>
      <h1>Мои животные</h1>
      <div className="profile">
        <div className="photo">
          <img src={avatar} alt="" />
        </div>
        <div className="content">
          <div className="text">
            <h3>Василий</h3>
            <h6>9 месяцев</h6>
          </div>
          <div
            className={activeClass}
            onClick={() => toggleCardActions(!isOpen)}>
            <span />
          </div>
        </div>
        <div className={openClass}>
          <i className="fa fa-codepen" />
          <i className="fa fa-facebook" />
          <i className="fa fa-github" />
          <i className="fa fa-tumblr" />
          <i className="fa fa-twitter" />
        </div>
      </div>
    </div>
  );
};

export default PetCard;
