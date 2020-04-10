import { BoardValues, Players } from 'types';
import { PLAYER_SIGNS } from 'types/constants';

import checkForWinner from './check-for-winner';

const createBoardMock = (val: any = {}): BoardValues => ({
  r1c1: null,
  r1c2: null,
  r1c3: null,
  r2c1: null,
  r2c2: null,
  r2c3: null,
  r3c1: null,
  r3c2: null,
  r3c3: null,
  ...val,
});

describe('checkForWinner', () => {
  describe('when empty value', () => {
    it('should return false', () => {
      const subject = checkForWinner(null);

      expect(subject).toBe(false);
    });
  });

  describe('when empty board', () => {
    it('should return false', () => {
      const emptyBoard = createBoardMock();
      const subject = checkForWinner(emptyBoard);

      expect(subject).toBe(false);
    });
  });

  describe('when there is no winning combination', () => {
    it('should return false', () => {
      const boardValues = createBoardMock({
        r1c1: PLAYER_SIGNS[Players.PLAYER_1],
        r1c2: PLAYER_SIGNS[Players.PLAYER_1],
        r1c3: PLAYER_SIGNS[Players.PLAYER_2],
      });
      const subject = checkForWinner(boardValues);

      expect(subject).toBe(false);
    });
  });

  describe('when the is a winning combination', () => {

    describe('when player 1 wins', () => {
      it('should return PLAYER_1', () => {
        const boardValues = createBoardMock({
          r1c3: PLAYER_SIGNS[Players.PLAYER_1],
          r2c2: PLAYER_SIGNS[Players.PLAYER_1],
          r3c1: PLAYER_SIGNS[Players.PLAYER_1],
        });
        const subject = checkForWinner(boardValues);
  
        expect(subject).toBe(Players.PLAYER_1);
      });
    })

    describe('when player 2 wins', () => {
      it('should return PLAYER_2', () => {
        const boardValues = createBoardMock({
          r1c1: PLAYER_SIGNS[Players.PLAYER_2],
          r1c2: PLAYER_SIGNS[Players.PLAYER_2],
          r1c3: PLAYER_SIGNS[Players.PLAYER_2],
        });
        const subject = checkForWinner(boardValues);
  
        expect(subject).toBe(Players.PLAYER_2);
      });
    })
  });
});
