import { Players, Signs, CellIds } from 'types';
import chunkArray from 'helpers/chunk-array';
import objectKeyValueInvert from 'helpers/object-key-value-invert';

export const WINNING_COMBINATIONS = [
  [CellIds.r1c1, CellIds.r1c2, CellIds.r1c3],
  [CellIds.r2c1, CellIds.r2c2, CellIds.r2c3],
  [CellIds.r3c1, CellIds.r3c2, CellIds.r3c3],
  [CellIds.r1c1, CellIds.r2c1, CellIds.r3c1],
  [CellIds.r1c2, CellIds.r2c2, CellIds.r3c2],
  [CellIds.r1c3, CellIds.r2c3, CellIds.r3c3],
  [CellIds.r1c1, CellIds.r2c2, CellIds.r3c3],
  [CellIds.r1c3, CellIds.r2c2, CellIds.r3c1],
];

export const CELL_IDS = Object.keys(CellIds) as Array<CellIds>;

export const ROWS = chunkArray(CELL_IDS, 3);

export const PLAYER_SIGNS = {
  [Players.PLAYER_1]: Signs.X,
  [Players.PLAYER_2]: Signs.O,
};

export const PLAYER_BY_SIGN = objectKeyValueInvert(PLAYER_SIGNS);
