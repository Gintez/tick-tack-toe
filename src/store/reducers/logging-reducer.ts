import { handleActions } from 'redux-actions';

import { setCellValue, setWinner, endGame } from '../actions';

type DefaultState = Array<string>;

type Payload = any;

const defaultState: DefaultState = [];

const reducer = handleActions<DefaultState, Payload>(
  {
    [setCellValue.toString()]: (state, { payload }) => ([
      `${payload?.cellValue} added to ${payload?.cellId}`,
      ...state,
    ]),
    [setWinner.toString()]: (state, { payload }) => ([
      `${payload} has won`,
      ...state
    ]),
    [endGame.toString()]: () => defaultState,
  },
  defaultState
);

export default reducer;
