import React from 'react';
import UserControls from './user-controls';
import Pets from '../pets';
import { Route } from 'react-router-dom';
import UserSettings from '../user-settings';
import {
  LeftColumn,
  OuterShadow,
  RightColumn,
  Wrapper
} from './user-profile.styled';
import MedicalRecord from '../medical-record';

const UserProfile = ({ userUid }) => {
  return (
    <Wrapper>
      <LeftColumn>
        <Route path="/users/:id/pets" component={Pets} />
        <Route path="/users/:id/settings" component={UserSettings} />
        <Route path="/users/:id/medical-record" component={MedicalRecord} />
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
