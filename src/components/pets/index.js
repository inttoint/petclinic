import React, { Component } from 'react';
import { fetchPetsByOwner } from '../../redux/ac';
import { connect } from 'react-redux';

import {
  getPetList,
  petListIsLoaded,
  petListIsLoading
} from '../../redux/selectors';
import Loader from '../common/loader';
import { SMainTitle } from '../common/titles.styled';
import { SContainer } from '../common/containers.styled';
import { PetList } from './pet-list';
import { Panel } from './panel';
import DefaultModal from '../modals/default-modal';

class Pets extends Component {
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

    const content =
      isLoading && !isLoaded ? <Loader /> : <PetList pets={pets} />;

    return (
      <SContainer>
        <SMainTitle>Мои питомцы</SMainTitle>
        <Panel />
        <DefaultModal />
        {content}
      </SContainer>
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
)(Pets);
