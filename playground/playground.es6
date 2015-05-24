import * as PanelsTypes from '../index';
import { Flux } from 'flummox';
import DUMMY_DATA from './dummy-data';

class AppFlux extends Flux {
  constructor() {
    super();

    this.createActions('types', PanelsTypes.Actions);
    this.createStore('types', PanelsTypes.Store, this);
  }
}

const flux = new AppFlux();
flux.getActions('types').load(DUMMY_DATA);

window.Playground = {
  flux,
  PanelsTypes,
  getStore() { return flux.getStore('types') }
};

console.log('Welcome to panels-types playground.');
console.log('https://types.usepanels.com');
console.log('Playground module', Playground);
