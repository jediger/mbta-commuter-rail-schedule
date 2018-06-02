/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  DEPARTURES_LOADED,
} from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  departures: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case DEPARTURES_LOADED:
      return { ...state, departures: action.departures };
    default:
      return state;
  }
}

export default appReducer;
