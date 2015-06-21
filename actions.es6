import { ADD, REMOVE_ALL, REMOVE } from './action-types';

export function add({app, component, name}) {
  return {
    type: ADD,
    app,
    component,
    name
  }
}

export function remove({app, name}) {
  return {
    type: REMOVE,
    app,
    name
  }
}

export function removeAll(app) {
  return {
    type: REMOVE_ALL,
    app
  }
}
