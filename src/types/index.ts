export enum Players {
  PLAYER_1 = 'PLAYER_1',
  PLAYER_2 = 'PLAYER_2',
}

export enum Signs {
  X = 'X',
  O = 'O',
}

export enum CellIds {
  r1c1 = 'r1c1',
  r1c2 = 'r1c2',
  r1c3 = 'r1c3',
  r2c1 = 'r2c1',
  r2c2 = 'r2c2',
  r2c3 = 'r2c3',
  r3c1 = 'r3c1',
  r3c2 = 'r3c2',
  r3c3 = 'r3c3',
}

export type BoardValues = {
  [key in CellIds]: Signs;
}
