import React from 'react';
import { connect } from 'react-redux';

import { isGameStarted } from 'store/selectors';
import StartGameButton from 'components/start-game-button';
import Game from 'components/game';

interface StateProps {
  isGameStarted: boolean;
}

type Props = StateProps;

export const App = (props: Props) => {
  const { isGameStarted } = props;

  return (
    <div>
      {isGameStarted ? <Game /> : <StartGameButton />}
    </div>
  );
};

const mapStateToProps = (state: any): StateProps => ({
  isGameStarted: isGameStarted(state),
});

export default connect(mapStateToProps)(App);
