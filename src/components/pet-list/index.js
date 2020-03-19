import React, { Component } from 'react';
import PetCard from './pet-card';
import { fetchPetsByOwner } from '../../redux/ac';
import { connect } from 'react-redux';

import './pet-list.scss';
import {
  getPetList,
  petListIsLoaded,
  petListIsLoading
} from '../../redux/selectors';
import Loader from '../common/loader';

class PetList extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      fetchPetsByOwner
    } = this.props;
    fetchPetsByOwner(id);
  }

  render() {
    const { isLoading, isLoaded, pets } = this.props;

    if (isLoading && !isLoaded) return <Loader />;

    const petListRendering =
      pets.length !== 0 ? (
        this.renderPets(pets)
      ) : (
        <h5>Добавьте своего питомца</h5>
      );

    return (
      <div className="container">
        <h1>Мои питомцы</h1>
        {petListRendering}
      </div>
    );
  }

  renderPets = pets => {
    return pets.map(pet => <PetCard key={pet.uid} pet={pet} />);
  };
}

export default connect(
  state => ({
    pets: getPetList(state),
    isLoading: petListIsLoading(state),
    isLoaded: petListIsLoaded(state)
  }),
  { fetchPetsByOwner }
)(PetList);
