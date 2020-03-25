import React from 'react';
import UserControls from './user-controls';
import PetList from '../pet-list';
import { Route } from 'react-router-dom';
import UserSettings from '../user-settings';
import {
  LeftColumn,
  OuterShadow,
  RightColumn,
  Wrapper
} from './user-profile.styled';
import TextContent from './text-content';

const UserProfile = ({ userUid }) => {
  return (
    <Wrapper>
      <LeftColumn>
        <Route path="/users/:id/pets" component={PetList} />
        <Route path="/users/:id/settings" component={UserSettings} />
        <Route path="/users/:id/medical-record" component={TextContent} />
      </LeftColumn>
      <RightColumn>
        <OuterShadow>
          <UserControls userUid={userUid} />
        </OuterShadow>
      </RightColumn>
    </Wrapper>
  );
};

export default UserProfile;
