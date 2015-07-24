import * as PanelsTypes from '../index';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({types: PanelsTypes.reducer});
const store = createStore(reducer);

const { add } = PanelsTypes.actions;
const apps = [
  {app: 'app', name: 'panel1', component: class Panel1 { render() {} }},
  {app: 'app', name: 'panel2', component: class Panel2 { render() {} }},
  {app: 'app2', name: 'panel1', component: class Panel1 { render() {} }}
].forEach(context => store.dispatch(add(context)));

window.Playground = {
  store,
  PanelsTypes
};

console.log('Welcome to panels-types playground.');
console.log('https://types.usepanels.com');
console.log('Playground module', Playground);

console.log('types:', store.getState().types);
