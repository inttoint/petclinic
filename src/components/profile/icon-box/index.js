import React from 'react';
import { ReactComponent as CatIcon } from '../svg/pet.svg';
import { ReactComponent as ReportIcon } from '../svg/registration.svg';
import { ReactComponent as MedIcon } from '../svg/vaccine.svg';
import { ReactComponent as HandIcon } from '../svg/veterinary.svg';
import IconBoxItem from './icon-box-item';
import './icon-box.scss';

const IconBox = ({ userUid }) => {
  return (
    <div className="icon-box">
      <IconBoxItem
        url={`/users/${userUid}/pets`}
        Icon={CatIcon}
        title="Мои животные"
      />
      <IconBoxItem url="#" Icon={ReportIcon} title="Мои обращения" />
      <IconBoxItem url="#" Icon={MedIcon} title="Назначения" />
      <IconBoxItem
        url={`/users/${userUid}/settings`}
        Icon={HandIcon}
        title="Настройки"
      />
    </div>
  );
};

export default IconBox;
