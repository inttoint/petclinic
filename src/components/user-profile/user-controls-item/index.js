import React from 'react';
import { SControlElement, SControlLink } from './icon-box-item.styled';

const UserControlsItem = ({ url, Icon, title }) => {
  return (
    <SControlElement>
      <SControlLink to={url}>
        <Icon />
        <h5>{title}</h5>
      </SControlLink>
    </SControlElement>
  );
};

export default UserControlsItem;
