import { BoardValues, CellIds, Players } from 'types';
import { WINNING_COMBINATIONS, PLAYER_BY_SIGN } from 'types/constants';

export const CELL_IDS = Object.keys(CellIds) as Array<CellIds>;

type PlayerMoves = Array<CellIds>

function checkForWinner(boardValues: BoardValues): boolean | Players {
  if (!boardValues) return false;

  const player1Moves = getPlayerMoves(boardValues, Players.PLAYER_1);
  const player2Moves = getPlayerMoves(boardValues, Players.PLAYER_2);

  for (let combination of WINNING_COMBINATIONS) {
    if (combination.every(hasMove(player1Moves))) {
      return Players.PLAYER_1;
    }

    if (combination.every(hasMove(player2Moves))) {
      return Players.PLAYER_2;
    }
  }

  return false;
}

function getPlayerMoves(
  boardValues: BoardValues,
  player: Players,
) {
  const playerMoves: PlayerMoves = [];

  CELL_IDS.forEach(cell => {
    const cellValue = boardValues[cell];

    if (!cellValue) return;

    player === PLAYER_BY_SIGN[cellValue] && playerMoves.push(cell);
  })

  return playerMoves;
}

function hasMove(moves: PlayerMoves): (cell: CellIds) => boolean {
  return cellId => moves.findIndex(playerMove => cellId === playerMove) !== -1
}

export default checkForWinner;
