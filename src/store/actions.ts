import { createAction } from 'redux-actions';
import { Action } from 'redux';

import { Players, Signs } from 'types';

export const setCurrentPlayer = createAction<Players>('SET_CURRENT_PLAYER');
export const startGame = createAction<void>('START_GAME');
export const setCellValue = createAction<{ cellId: string, cellValue: Signs }>('SET_CELL_VALUE');
export const addActionLog = createAction<Action>('ADD_ACTION_LOG');
export const endGame = createAction<void>('END_GAME');
export const setWinner = createAction<Players>('SET_WINNER'); 