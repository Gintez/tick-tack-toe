import React from 'react';

import { renderWithProviders } from 'helpers/test-utils';

import { GameLogging } from './game-logging';

describe('<GameLogging />', () => {
  it('renders the correct count of game logs', () => {
    const actionsLogging = [
      'string',
      'string 2'
    ];

    const { queryAllByTestId } = renderWithProviders(
      <GameLogging actionsLogging={actionsLogging} />
    );
    const gameLogs = queryAllByTestId('game-log');

    expect(gameLogs.length).toBe(2);
  });
});
