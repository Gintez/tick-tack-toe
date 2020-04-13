import React from 'react';
import { fireEvent } from '@testing-library/react';

import { renderWithProviders } from 'helpers/test-utils';
import { CellIds, Players, Signs } from 'types';
import { PLAYER_SIGNS } from 'types/constants';
import * as actions from 'store/actions';

import { Cell } from './cell';

const setCellValue = jest.fn();
const actionsMock = { ...actions, setCellValue };

describe('<Cell />', () => {
  describe('when cell value exists', () => {
    let wrapper: any;
    const actionsMock = { ...actions, setCellValue };
    const cellValue = Signs.O;

    beforeEach(() => {
      jest.clearAllMocks();
      wrapper = renderWithProviders(
        <Cell
          cellId={CellIds.r1c1}
          currentPlayer={Players.PLAYER_1}
          cellValue={cellValue}
          actions={actionsMock}
        />
      );
    });

    it('renders cell value', () => {
      const { queryByText } = wrapper;
      const subject = queryByText(cellValue);

      expect(subject).toBeInTheDocument();
    });

    describe('on click', () => {
      it('does not set cell value', () => {
        const { getByTestId } = wrapper;
        const button = getByTestId('board-cell');
        fireEvent.click(button);

        expect(setCellValue).not.toBeCalled();
      });

    });
  });

  describe('when cell has no value', () => {
    let wrapper: any;
    const currentPlayer = Players.PLAYER_1;
    const cellId = CellIds.r1c1;

    beforeEach(() => {
      jest.clearAllMocks();
      wrapper = renderWithProviders(
        <Cell
          cellId={cellId}
          currentPlayer={currentPlayer}
          cellValue={null}
          actions={actionsMock}
        />
      );
    });

    describe('on click', () => {
      it('sets cell value', () => {
        const { getByTestId } = wrapper;
        const button = getByTestId('board-cell');
        fireEvent.click(button);

        expect(setCellValue).toBeCalledWith({
          cellId,
          cellValue: PLAYER_SIGNS[currentPlayer],
        });
      });
    });
  });

  describe('when board is disabled', () => {
    let wrapper: any;
    const currentPlayer = Players.PLAYER_1;
    const cellId = CellIds.r1c1;

    beforeEach(() => {
      jest.clearAllMocks();
      wrapper = renderWithProviders(
        <Cell
          cellId={cellId}
          isDisabled
          currentPlayer={currentPlayer}
          cellValue={null}
          actions={actionsMock}
        />
      );
    });

    describe('on click', () => {
      it('does not set cell value', () => {
        const { getByTestId } = wrapper;
        const button = getByTestId('board-cell');
        fireEvent.click(button);

        expect(setCellValue).not.toBeCalled();
      });
    });
  })
});
