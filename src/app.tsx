import React from 'react';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { isGameStarted } from 'store/selectors';
import StartGameButton from 'components/start-game-button';
import Game from 'components/game';
import { State } from 'store';

const useStyles = createUseStyles({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
});

interface StateProps {
  isGameStarted: boolean;
}

type Props = StateProps;

export const App = (props: Props) => {
  const { isGameStarted } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isGameStarted ? <Game /> : <StartGameButton />}
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  isGameStarted: isGameStarted(state),
});

export default connect(mapStateToProps)(App);
