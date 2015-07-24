import { ADD, REMOVE, REMOVE_ALL } from './action-types';
import i from 'seamless-immutable';

export default function(state=i({}), {type, payload}) {
  switch (type) {
    case ADD: return add(state, payload);
    case REMOVE: return remove(state, payload);
    case REMOVE_ALL: return removeAll(state, payload);
    default: return state;
  }
}

function add(state, {app, name, component}) {
  const { [app]: types, ...rest } = state;
  return i(rest).merge({[app]: {...types, [name]: component}});
}

function remove(state, {app, name}) {
  const { [app]: { [name]: component, ...types }, ...rest } = state;
  return i(rest).merge({[app]: types});
}

function removeAll(state, {app}) {
  const { [app]: types, ...rest } = state;
  return i(rest);
}
