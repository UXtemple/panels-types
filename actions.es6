import { ADD, REMOVE_ALL, REMOVE } from './action-types';

export function add({app, component, name}) {
  return {
    type: ADD,
    payload: {
      app,
      component,
      name
    }
  }
}

export function remove({app, name}) {
  return {
    type: REMOVE,
    payload: {
      app,
      name
    }
  }
}

export function removeAll(app) {
  return {
    type: REMOVE_ALL,
    payload: {
      app
    }
  }
}
