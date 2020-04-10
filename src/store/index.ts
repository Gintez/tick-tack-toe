import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { loadState, saveState } from 'helpers/session-storage';

import createRootReducer from './reducer';
import loggingMiddleware from './logging-middleware';

const setUpStore = () => {
  const persistedState = loadState();

  const store = createStore(
    createRootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(loggingMiddleware)),
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

export default setUpStore();