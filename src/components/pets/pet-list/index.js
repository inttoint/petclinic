import React from 'react';
import PetCard from '../pet-card';

export const PetList = ({ pets }) => {
  if (pets.length === 0) return <h5>Добавьте своего питомца</h5>;

  return pets.map(pet => <PetCard key={pet.uid} pet={pet} />);
};
