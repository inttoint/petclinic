import { moduleName } from '../reducers/users';
import { createSelector } from 'reselect';
import { loginCredentialsSelector } from './auth';

const stateSelector = state => state[moduleName];
export const userIsLoadingSelector = createSelector(
  stateSelector,
  state => state.isLoading
);

export const entitiesSelector = createSelector(
  stateSelector,
  state => state.entities
);

export const authUserDetailsSelector = createSelector(
  entitiesSelector,
  loginCredentialsSelector,
  (entities, user) => entities.get(user && user.get('uid'))
);
