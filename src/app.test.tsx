import React from 'react';

import { renderWithProviders } from 'helpers/test-utils';
import { App } from './app';
 
describe('<App />', () => {
  describe('when game is not started', () => {
    let wrapper: any;
    beforeEach(() => {
      wrapper = renderWithProviders(
        <App isGameStarted={false} />
      );
    })

    it('renders start game button', () => {
      const { queryByTestId } = wrapper;
      const startGameButton = queryByTestId('button--start-game');
  
      expect(startGameButton).toBeInTheDocument();
    });

    it('does not render game', () => {
      const { queryByTestId } = wrapper;
      const game = queryByTestId('game');
  
      expect(game).not.toBeInTheDocument();
    })
  })

  describe('when game is started', () => {
    let wrapper: any;
    beforeEach(() => {
      wrapper = renderWithProviders(
        <App isGameStarted />
      );
    })

    it('does not render start game button', () => {
      const { queryByTestId } = wrapper;
      const startGameButton = queryByTestId('button--start-game');
  
      expect(startGameButton).not.toBeInTheDocument();
    })

    it('renders game', () => {
      const { queryByTestId } = wrapper;
      const game = queryByTestId('game');
  
      expect(game).toBeInTheDocument();
    })
  })
})