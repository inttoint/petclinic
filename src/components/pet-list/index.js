import React from 'react';
import './pet-list.scss';
import PetCard from './pet-card';

const PetList = () => {
  return (
    <div className="container">
      <h1>Мои животные</h1>
      <PetCard />
      <PetCard />
      <PetCard />
    </div>
  );
};

export default PetList;
