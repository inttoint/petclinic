import React from 'react';
import { ControlElement, ControlLink } from './icon-box-item.styled';

const UserControlsItem = ({ url, Icon, title }) => {
  return (
    <ControlElement>
      <ControlLink to={url}>
        <Icon />
        <h5>{title}</h5>
      </ControlLink>
    </ControlElement>
  );
};

export default UserControlsItem;
