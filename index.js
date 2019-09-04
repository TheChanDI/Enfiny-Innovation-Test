/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './src/store/reducers/index';

// const store = createStore(rootReducer);

// const Root = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

AppRegistry.registerComponent(appName, () => App);
