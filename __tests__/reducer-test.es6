import { ADD, REMOVE, REMOVE_ALL } from '../action-types';
import * as TYPE from './type';
import * as TYPE2 from './type2';
import assert from 'assert';
import i from 'seamless-immutable';
import reducer from '../reducer';

describe('reducer', () => {
  it('handles ADD', () => {
    const newState = reducer(i({}), {type: ADD, payload: TYPE});
    assert(newState.hasOwnProperty(TYPE.app), 'has app');
    assert(newState[TYPE.app].hasOwnProperty(TYPE.name), 'has name');
    assert(newState[TYPE.app][TYPE.name] === TYPE.component, 'has component');
  });

  it('handles REMOVE', () => {
    const iState = i({
      [TYPE.app]: {
        [TYPE.name]: TYPE.component,
        [TYPE2.name]: TYPE2.component
      }
    });
    const newState = reducer(iState, {type: REMOVE, payload: {app: TYPE.app, name: TYPE.name}});
    assert(newState.hasOwnProperty(TYPE.app), 'has app');
    assert(!newState[TYPE.app].hasOwnProperty(TYPE.name), 'doesn\'t have TYPE.name');
    assert(newState[TYPE2.app].hasOwnProperty(TYPE2.name), 'has TYPE2.name');
  });

  it('handles REMOVE_ALL', () => {
    const iState = i({
      [TYPE.app]: {
        [TYPE.name]: TYPE.component
      }
    });
    const newState = reducer(iState, {type: REMOVE_ALL, payload: {app: TYPE.app}});
    assert(!newState.hasOwnProperty(TYPE.app), 'doesn\'t have app');
  });
});
