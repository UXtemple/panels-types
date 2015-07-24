import { add, remove, removeAll } from '../actions';
import { ADD, REMOVE, REMOVE_ALL } from '../action-types';
import * as TYPE from './type';
import assert from 'assert';

describe('actions', () => {
  it('#add', () => {
    const {type, payload: {app, component, name}} = add(TYPE);
    assert(type === ADD, 'type');
    assert(app === TYPE.app, 'payload: app');
    assert(component === TYPE.component, 'payload: component');
    assert(name === TYPE.name, 'payload: name');
  });

  it('#remove', () => {
    const {type, payload: {app, name}} = remove({app: TYPE.app, name: TYPE.name});
    assert(type === REMOVE, 'type');
    assert(app === TYPE.app, 'payload: app');
    assert(name === TYPE.name, 'payload: name');
  });

  it('#removeAll', () => {
    const {type, payload: {app}} = removeAll(TYPE.app);
    assert(type === REMOVE_ALL, 'type');
    assert(app === TYPE.app, 'payload: app');
  });
});
