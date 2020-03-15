import { OrderedMap, Record } from 'immutable';

const PetRecord = new Record({
  uid: null,
  name: null,
  description: null,
  birthday: null,
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
