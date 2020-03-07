import React, { useState } from 'react';
import avatar from './Avatar_cat.png';
import { ReactComponent as SettingIcon } from './gear.svg';
import { ReactComponent as MedReportIcon } from './medical-history.svg';
import { ReactComponent as MedHelpIcon } from './syringe.svg';
import './pet-card.scss';

const PetCard = () => {
  const [isOpen, toggleCardActions] = useState(false);

  const activeClass = isOpen ? 'active' : '';
  const openClass = isOpen ? 'open' : '';

  return (
    <div>
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
