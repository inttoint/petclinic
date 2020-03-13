import { OrderedMap, Map } from 'immutable';

export function generateId() {
  return Date.now();
}

/**
 * Конвертер данных из firebase. С добавлением uid к сущности.
 * @param data - данные из fb
 * @param RecordModel - immutable запись
 */
export function fbDataToEntities(data, RecordModel = Map) {
  return new OrderedMap(data).mapEntries(([key, value]) => [
    key,
    new RecordModel(value).set('uid', key)
  ]);
}

// ToDo: переписать метод
export function entitiesToFbData(entities) {
  const dataJS = entities.toJS();
  delete dataJS.uid;
  return dataJS;
}

export function filterFalsyValues(obj) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) =>
      value || value === '' ? { ...acc, [key]: value.trim() } : acc,
    {}
  );
}
