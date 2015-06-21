import { APP, NAME, COMPONENT } from './type';
import { find } from '../getters';
import assert from 'assert';

describe('getters', () => {
  it('#find', () => assert(find({[APP]: {[NAME]: COMPONENT}}, APP, NAME) === COMPONENT));
});
