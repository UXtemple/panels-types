import { Actions } from 'flummox';

export default class TypesActions extends Actions {
  load(types) {
    return Array.isArray(types) ? types : [types];
  }
}
