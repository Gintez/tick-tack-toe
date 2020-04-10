import { State } from 'store';
import { CellIds } from 'types';

export const isGameStarted = (state: State) => state?.isGameStarted;

export const getCurrentPlayer = (state: State) => state?.currentPlayer;

export const getCellValue = (state: State, { cellId }: { cellId: CellIds }) =>
  state?.boardValues?.[cellId];

export const getGameLogging = (state: State) => state?.actionsLogs;

export const getBoardValues = (state: State) => state?.boardValues;

export const getWinner = (state: State) => state?.winner;