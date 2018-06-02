/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'sanitize.css/sanitize.css';

// Import root app
import Departures from 'containers/DeparturesPage/Departures';
import store from './store';

const MOUNT_NODE = document.getElementById('app');
render(
  <Provider store={store}>
    <Departures />
  </Provider>,
  MOUNT_NODE
);
