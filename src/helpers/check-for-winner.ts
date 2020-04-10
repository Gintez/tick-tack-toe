import { BoardValues, CellIds, Players, Signs } from 'types';
import { PLAYER_SIGNS, WINNING_COMBINATIONS } from 'types/constants';

function getPlayerBySign(sign: Signs) {
  return Object.keys(PLAYER_SIGNS).find(
    (key) => PLAYER_SIGNS[key as Players] === sign
  );
}

type PlayerMoves = Array<CellIds>

function getPlayersMoves(
  boardValues: BoardValues
) {
  const cells = Object.keys(boardValues) as Array<CellIds>;
  const player1Moves: PlayerMoves = [];
  const player2Moves: PlayerMoves = [];

  cells.forEach(cell => {
    const cellValue = boardValues[cell];

    if (cellValue) {
      const player = getPlayerBySign(cellValue) as Players;
      const array = player === Players.PLAYER_1 ? player1Moves : player2Moves;

      array.push(cell)
    }
  })

  return {
    [Players.PLAYER_1]: player1Moves,
    [Players.PLAYER_2]: player2Moves,
  };
}

function hasMove(moves: PlayerMoves): (cell: CellIds) => boolean {
  return cellId => moves.findIndex(playerMove => cellId === playerMove) !== -1
}

function checkForWinner(boardValues: BoardValues): boolean | Players {
  if (!boardValues) return false;

  const playersMoves = getPlayersMoves(boardValues);

  const player1Moves = playersMoves[Players.PLAYER_1];
  const player2Moves = playersMoves[Players.PLAYER_2];

  if (player1Moves.length === 0 && player2Moves.length === 0) {
    return false;
  }

  for (let index = 0; index < WINNING_COMBINATIONS.length; index++) {
    const combination = WINNING_COMBINATIONS[index];

    if (combination.every(hasMove(player1Moves))) {
      return Players.PLAYER_1;
    }

    if (combination.every(hasMove(player2Moves))) {
      return Players.PLAYER_2;
    }
  }

  return false;
}

export default checkForWinner;
