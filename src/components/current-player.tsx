import React from 'react';
import { connect } from 'react-redux';

import { getCurrentPlayer, getWinner } from 'store/selectors';
import { Players } from 'types';

interface StateProps {
  currentPlayer: Players;
  winner: Players;
}

type Props = StateProps;

const CurrentPlayer = (props: Props) => {
  const { currentPlayer, winner } = props;

  return winner ? (
    <div>{`${winner} is a Winner!`}</div>
  ) : (
    currentPlayer && <div>{`${currentPlayer} turn`}</div>
  );
};

const mapStateToProps = (state: any): StateProps => ({
  currentPlayer: getCurrentPlayer(state),
  winner: getWinner(state),
});

export default connect(mapStateToProps)(CurrentPlayer);
