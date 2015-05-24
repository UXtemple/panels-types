import { Map as ImmutableMap } from 'immutable';
import TypeRecord from './type-record';
import { Store } from 'flummox';

export default class TypesStore extends Store {
  static assignState(oldState, newState) { return newState }

  constructor(flux) {
    super();

    const actionIds = flux.getActionIds('types');
    this.register(actionIds.load, this.load);

    this.state = ImmutableMap();
  }

  load(types) {
    let obj = {};

    types.forEach(type => obj[type.name] = new TypeRecord(type));

    this.setState(this.state.merge(obj));
  }

  getByName(name) { return this.state.get(name) }
}
