import { moduleName } from '../reducers/pets';
import { createSelector } from 'reselect';

const petsState = state => state[moduleName];
const petsEntities = createSelector(petsState, state => state.entities);

export const petListIsLoaded = createSelector(
  petsState,
  state => state.isLoaded
);
export const petListIsLoading = createSelector(
  petsState,
  state => state.isLoading
);

export const getPetList = createSelector(petsEntities, entities =>
  entities.valueSeq().toArray()
);
