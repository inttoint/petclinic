import React from 'react';
import IconBox from './icon-box';
import PetList from '../pet-list';
import { Route } from 'react-router-dom';
import UserSettings from '../user-settings';
import {
  LeftColumn,
  OuterShadow,
  RightColumn,
  Wrapper
} from './user-profile.styled';

const UserProfile = ({ userUid }) => {
  return (
    <Wrapper>
      <LeftColumn>
        <Route path="/users/:id/pets" component={PetList} />
        <Route path="/users/:id/settings" component={UserSettings} />
      </LeftColumn>
      <RightColumn>
        <OuterShadow>
          <IconBox userUid={userUid} />
        </OuterShadow>
      </RightColumn>
    </Wrapper>
  );
};

export default UserProfile;
