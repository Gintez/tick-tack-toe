import { State } from 'store';
import { CellIds } from 'types';

export const isGameStarted = (state: State) => state?.game?.isGameStarted;

export const getCurrentPlayer = (state: State) => state?.game?.currentPlayer;

export const getCellValue = (state: State, { cellId }: { cellId: CellIds }) =>
  state?.game?.boardValues?.[cellId];

export const getGameLogging = (state: State) => state?.logging;

export const getBoardValues = (state: State) => state?.game?.boardValues;

export const getWinner = (state: State) => state?.game?.winner;
