import React from 'react';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { getCurrentPlayer, getWinner } from 'store/selectors';
import { Players } from 'types';
import { State } from 'store';

const useStyles = createUseStyles({
  root: {
    textAlign: 'center'
  },
});

interface StateProps {
  currentPlayer: Players;
  winner: Players;
}

type Props = StateProps;

export const CurrentPlayer = (props: Props) => {
  const { currentPlayer, winner } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {winner ? (
        <div>{`${winner} has won!`}</div>
      ) : (
        currentPlayer && <div>{`${currentPlayer} turn`}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  currentPlayer: getCurrentPlayer(state),
  winner: getWinner(state),
});

export default connect(mapStateToProps)(CurrentPlayer);
