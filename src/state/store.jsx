// src/state/store.jsx
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Make sure you import thunk correctly
import reducers from './reducers';  // Import reducers

export const store = createStore(
  reducers,
  applyMiddleware(thunk)  // Apply redux-thunk middleware for async actions
);
