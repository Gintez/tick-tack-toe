import React from 'react';

import { renderWithProviders } from 'helpers/test-utils';
import { Board } from './board';
 
describe('<Board />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = renderWithProviders(
      <Board />
    );
  })

  it('should render 3 rows', () => {
    const { queryAllByTestId } = wrapper;
    const boardRows = queryAllByTestId('board-row');

    expect(boardRows.length).toBe(3);
  });

  it('should render 9 cells', () => {
    const { queryAllByTestId } = wrapper;
    const boardRows = queryAllByTestId('board-cell');

    expect(boardRows.length).toBe(9);
  });
})