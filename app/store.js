/**
 * Create the store with dynamic reducers
 */
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  combineReducers(rootReducer),
  {},
  compose(applyMiddleware(thunk))
);

export default store;
