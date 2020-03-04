import React from 'react';
import { ReactComponent as CatIcon } from './svg/cat.svg';
import { ReactComponent as ReportIcon } from './svg/registration.svg';
import { ReactComponent as MedIcon } from './svg/vaccine.svg';
import { ReactComponent as HandIcon } from './svg/veterinary.svg';
import './profile.scss';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="wrapper">
      <div className="main-controls">
        <div className="main-controls__left">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
          <div className="divider-line" />
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Molestie at elementum eu facilisis sed odio. Nulla facilisi cras
            fermentum odio eu feugiat. Ac odio tempor orci dapibus ultrices in
            iaculis.
          </p>
        </div>
        <div className="main-controls__right">
          <div className="outer-shadow">
            <div className="icon-box">
              <div className="icon-box__item">
                <Link to="#" className="icon-box__item--link">
                  <CatIcon />
                  <h5>Мои животные</h5>
                </Link>
              </div>
              <div className="icon-box__item">
                <Link to="#" className="icon-box__item--link">
                  <ReportIcon />
                  <h5>Мои обращения</h5>
                </Link>
              </div>
              <div className="icon-box__item">
                <Link to="#" className="icon-box__item--link">
                  <MedIcon />
                  <h5>Назначения</h5>
                </Link>
              </div>
              <div className="icon-box__item">
                <Link to="#" className="icon-box__item--link">
                  <HandIcon />
                  <h5>Настройки</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
