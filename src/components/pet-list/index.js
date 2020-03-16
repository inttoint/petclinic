import React, { Component } from 'react';
import PetCard from './pet-card';
import { fetchPetsByOwner } from '../../redux/ac';
import { connect } from 'react-redux';

import './pet-list.scss';

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
    return (
      <div className="container">
        <h1>Мои питомцы</h1>
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
    );
  }
}

export default connect(null, { fetchPetsByOwner })(PetList);
