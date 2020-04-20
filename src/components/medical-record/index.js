import React from 'react';
import MedicalRecordTable from './medical-record-table';
import { SContainer } from '../common/containers.styled';
import { SMainTitle } from '../common/titles.styled';

const MedicalRecord = props => {
  return (
    <SContainer>
      <SMainTitle>Медицинские записи</SMainTitle>
      <MedicalRecordTable {...props} />
    </SContainer>
  );
};

export default MedicalRecord;
