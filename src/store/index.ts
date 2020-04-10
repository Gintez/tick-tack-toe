import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import createRootReducer from './reducer';
import loggingMiddleware from './logging-middleware';

const setUpStore = () => {

  const store = createStore(
    createRootReducer,
    composeWithDevTools(applyMiddleware(loggingMiddleware)),
  );

  return store;
};

export default setUpStore();