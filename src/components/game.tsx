import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { getCurrentPlayer } from 'store/selectors';
import { Players, BoardValues } from 'types';
import * as actions from 'store/actions';
import { getBoardValues } from 'store/selectors';
import checkForWinner from 'helpers/check-for-winner';

import Board from './board';
import GameLogging from './game-logging';
import CurrentPlayer from './current-player';
import RestartButton from './restart-button';

interface StateProps {
  currentPlayer: Players;
  boardValues: BoardValues;
}

interface DispatchProps {
  actions: typeof actions;
}

type Props = StateProps & DispatchProps;

const Game = (props: Props) => {
  const { currentPlayer, boardValues, actions } = props;

  useEffect(() => {
    handleGameChange();
  }, [boardValues]);

  function handleGameChange() {
    const winner = checkForWinner(boardValues);
    if (winner) {
      actions.setWinner(winner as Players);
      return;
    }

    togglePlayer();
  }

  function togglePlayer() {
    const nextPlayer = currentPlayer == Players.PLAYER_1
      ? Players.PLAYER_2
      : Players.PLAYER_1;

    actions.setCurrentPlayer(nextPlayer);
  }

  return (
    <div>
      <CurrentPlayer />
      <Board />
      <RestartButton />
      <GameLogging />
    </div>
  );
};

const mapStateToProps = (state: any): StateProps => ({
  currentPlayer: getCurrentPlayer(state),
  boardValues: getBoardValues(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
