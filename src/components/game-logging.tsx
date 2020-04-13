import React from 'react';
import { connect } from 'react-redux';

import { getGameLogging } from 'store/selectors';
import { State } from 'store';

interface StateProps {
  actionsLogging: Array<string>;
}

type Props = StateProps;

export const GameLogging = (props: Props) => {
  const { actionsLogging = [] } = props;

  return (
    <div>
      {actionsLogging.map(log => (
        <div data-qa='game-log' key={log}>{log}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  actionsLogging: getGameLogging(state),
});

export default connect(mapStateToProps)(GameLogging);
