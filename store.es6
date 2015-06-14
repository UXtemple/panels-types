import { Store } from 'flummox';
import I from 'seamless-immutable';

const Type = ({app, name, component}) => ({app, name, component});

export function load(types, payload, state) {
  return state.merge(I(types.map(Type)).asObject(type => [type.name, type]));
}

export default class TypesStore extends Store {
  static assignState(oldState, newState) { return newState }

  constructor(flux) {
    super();
    this.state = I({});
    this.register(flux.getActionIds('types').load, load);
  }

  getByName(name) { return this.state[name] }
}
