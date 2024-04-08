// index.js or App.js (where you wrap your component with Provider)
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/store'; // Adjust the path as needed
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
