export const isGameStarted = (state: any) => state?.isGameStarted;

export const getCurrentPlayer = (state: any) => state?.currentPlayer; // TODO: ADD STATE TYPE

export const getCellValue = (state: any, { cellId }: { cellId: string }) =>
  state?.boardValues?.[cellId]; // TODO: ADD CELL VALUES

export const getGameLogging = (state: any) => state?.actionsLogs;

export const getBoardValues = (state: any) => state?.boardValues;

export const getWinner = (state: any) => state?.winner;