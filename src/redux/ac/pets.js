import { createActions } from 'redux-actions';
import { FAILURE, FETCH_PETS_BY_OWNER, SUCCESS } from '../constants';
export const {
  fetchPetsByOwner,
  fetchPetsByOwnerSuccess,
  fetchPetsByOwnerFailure
} = createActions(
  FETCH_PETS_BY_OWNER,
  FETCH_PETS_BY_OWNER + SUCCESS,
  FETCH_PETS_BY_OWNER + FAILURE
);
