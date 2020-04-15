import React from 'react';
import { ReactComponent as CatIcon } from '../../../assets/images/icons/pets_heart.svg';
import { ReactComponent as ReportIcon } from '../../../assets/images/icons/document.svg';
import { ReactComponent as MedIcon } from '../../../assets/images/icons/vaccine.svg';
import { ReactComponent as HandIcon } from '../../../assets/images/icons/hand_and_paw.svg';
import UserControlsItem from '../user-controls-item';
import { UserControlsWrapper } from './icon-box.styled';

const UserControls = ({ userUid }) => {
  return (
    <UserControlsWrapper>
      <UserControlsItem
        url={`/users/${userUid}/pets`}
        Icon={CatIcon}
        title="Мои животные"
      />
      <UserControlsItem
        url={`/users/${userUid}/medical-records`}
        Icon={ReportIcon}
        title="Мои обращения"
      />
      <UserControlsItem url="#" Icon={MedIcon} title="Назначения" />
      <UserControlsItem
        url={`/users/${userUid}/settings`}
        Icon={HandIcon}
        title="Настройки"
      />
    </UserControlsWrapper>
  );
};

export default UserControls;
