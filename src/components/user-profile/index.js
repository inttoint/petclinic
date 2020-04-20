import React from 'react';
import UserControls from './user-controls';
import Pets from '../pets';
import { Route } from 'react-router-dom';
import UserSettings from '../user-settings';
import {
  SLeftColumn,
  SOuterShadow,
  SRightColumn,
  SWrapper
} from './user-profile.styled';
import MedicalRecord from '../medical-record';

const UserProfile = ({ userUid }) => {
  return (
    <SWrapper>
      <SLeftColumn>
        <Route path="/users/:id/pets" component={Pets} />
        <Route path="/users/:id/settings" component={UserSettings} />
        <Route path="/users/:id/medical-records" component={MedicalRecord} />
      </SLeftColumn>
      <SRightColumn>
        <SOuterShadow>
          <UserControls userUid={userUid} />
        </SOuterShadow>
      </SRightColumn>
    </SWrapper>
  );
};

export default UserProfile;
