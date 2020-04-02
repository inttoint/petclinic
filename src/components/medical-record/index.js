import React from 'react';
import MedicalRecordTable from './medical-record-table';
import { Container } from '../common/containers.styled';
import { MainTitle } from '../common/titles/titles.styled';

const MedicalRecord = () => {
  return (
    <Container>
      <MainTitle>Медицинские записи</MainTitle>
      <MedicalRecordTable />
    </Container>
  );
};

export default MedicalRecord;
