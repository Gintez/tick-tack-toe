import { combineReducers } from 'redux';

import gameReducer from './reducers/game-reducer';
import loggingReducer from './reducers/logging-reducer';

export default combineReducers({
  game: gameReducer,
  logging: loggingReducer,
});
