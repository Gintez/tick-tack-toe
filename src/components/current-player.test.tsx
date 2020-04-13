import React from 'react';

import { renderWithProviders } from 'helpers/test-utils';
import { Players } from 'types';

import { CurrentPlayer } from './current-player';


describe('<CurrentPlayer />', () => {
  describe('when there is a winner', () => {
    let wrapper: any;
    const currentPlayer = Players.PLAYER_1;
    const winner = Players.PLAYER_1;

    beforeEach(() => {
      wrapper = renderWithProviders(
        <CurrentPlayer currentPlayer={currentPlayer} winner={winner} />
      );
    })

    it('announces the winner', () => {
      const { queryByText } = wrapper;
      const winnerText = queryByText(`${winner} has won!`);
  
      expect(winnerText).toBeInTheDocument();
    });
  })

  describe('when there is no winner', () => {
    let wrapper: any;
    const currentPlayer = Players.PLAYER_1;

    beforeEach(() => {
      wrapper = renderWithProviders(
        <CurrentPlayer currentPlayer={currentPlayer} winner={null} />
      );
    })

    it('says which player`s turn it is', () => {
      const { queryByText } = wrapper;
      const winnerText = queryByText(`${currentPlayer} turn`);
  
      expect(winnerText).toBeInTheDocument();
    });
  })
});
