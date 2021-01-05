/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {createStore} from 'redux';
// import allReducers from './src/reducers';

// const store = createStore(allReducers);

// display in console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());

AppRegistry.registerComponent(appName, () => App);
