import { OrderedMap, Record } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  fetchPetsByOwner,
  fetchPetsByOwnerSuccess,
  fetchPetsByOwnerFailure
} from '../ac';
import { fbDataToEntities } from '../utils';

const PetRecord = new Record({
  uid: null,
  name: null,
  description: null,
  age: null,
  photo: null,
  type: null,
  ownerUid: null
});

const ReducerRecord = new Record({
  entities: new OrderedMap(),
  isLoading: false,
  isLoaded: false,
  error: null
});

export const moduleName = 'pets';

const handlers = {
  [fetchPetsByOwner]: state =>
    state.set('isLoading', true).set('isLoaded', false),

  [fetchPetsByOwnerSuccess]: (state, { payload }) =>
    state
      .set('entities', fbDataToEntities(payload, PetRecord))
      .set('isLoading', false)
      .set('isLoaded', true),

  [fetchPetsByOwnerFailure]: (state, { payload }) =>
    state
      .set('error', payload)
      .set('isLoading', false)
      .set('isLoaded', true)
};

export default handleActions(handlers, new ReducerRecord());
