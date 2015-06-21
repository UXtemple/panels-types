import * as PanelsTypes from '../index';
import { createRedux } from 'redux';

const redux = createRedux({types: PanelsTypes.reducer});

const { add } = PanelsTypes.Actions;
const apps = [
  {app: 'app', name: 'panel1', component: class Panel1 { render() {} }},
  {app: 'app', name: 'panel2', component: class Panel2 { render() {} }},
  {app: 'app2', name: 'panel1', component: class Panel1 { render() {} }}
].forEach(context => redux.dispatch(add(context)));

window.Playground = {
  redux,
  PanelsTypes
};

console.log('Welcome to panels-types playground.');
console.log('https://types.usepanels.com');
console.log('Playground module', Playground);

console.log('types:', redux.getState('types').types);
