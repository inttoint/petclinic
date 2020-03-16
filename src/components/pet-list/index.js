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
import Spinner from '../common/spinner';

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
    if (isLoading && !isLoaded) return <Spinner />;
    console.log(pets);
    return (
      <div className="container">
        <h1>Мои питомцы</h1>
        {pets.map(pet => (
          <PetCard key={pet.uid} pet={pet} />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    pets: getPetList(state),
    isLoading: petListIsLoading(state),
    isLoaded: petListIsLoaded(state)
  }),
  { fetchPetsByOwner }
)(PetList);
