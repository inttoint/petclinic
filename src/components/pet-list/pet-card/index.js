import React, { useState } from 'react';
import avatarCat from './Avatar_cat.png';
import avatarDog from './avatar_dog.jpg';
import { ReactComponent as SettingIcon } from './gear.svg';
import { ReactComponent as MedReportIcon } from './medical-history.svg';
import { ReactComponent as MedHelpIcon } from './syringe.svg';
import './pet-card.scss';

const PetCard = ({ pet: { name, description, age, type } }) => {
  const [isOpen, toggleCardActions] = useState(false);

  const activeClass = isOpen ? 'active' : '';
  const openClass = isOpen ? 'open' : '';

  const avatar = type === 'Собака' ? avatarDog : avatarCat;

  return (
    <div>
      <div className="profile">
        <div className="photo">
          <img src={avatar} alt="" />
        </div>
        <div className="content">
          <div className="text">
            <div className="row">
              <h3>{name}</h3>
              <h6>{age}</h6>
            </div>
            <h6>{description}</h6>
          </div>
          <div
            className={`btn ${activeClass}`}
            onClick={() => toggleCardActions(!isOpen)}>
            <span />
          </div>
        </div>
        <div className={`box ${openClass}`}>
          <div>
            <MedHelpIcon />
          </div>
          <div>
            <MedReportIcon />
          </div>
          <div>
            <SettingIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
