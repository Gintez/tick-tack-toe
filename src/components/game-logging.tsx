import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';

import * as actions from 'store/actions';
import { getGameLogging } from 'store/selectors';

interface StateProps {
  actionsLogging: Array<Action>;
}

type Props = StateProps;

function createSetCellValueLog({ payload }: any) {
  return `${payload?.cellValue} added to ${payload?.cellId}`;
}

function createSetWinnerLog({ payload }: any) {
  return `${payload} Wins`;
}

function createGameLogs(relevantActions: Array<Action>) {
  const gameLogs: Array<string> = [];

  relevantActions.forEach((action: Action) => {
    if (action.type === actions.setCellValue.toString()) {
      gameLogs.push(createSetCellValueLog(action));
    }

    if (action.type === actions.setWinner.toString()) {
      gameLogs.push(createSetWinnerLog(action));
    }
  });

  return gameLogs;
}

const GameLogging = (props: Props) => {
  const { actionsLogging = [] } = props;
  const gameLogs = createGameLogs(actionsLogging);

  return (
    <div>
      {gameLogs.map(log => (
        <div key={log}>{log}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: any): StateProps => ({
  actionsLogging: getGameLogging(state),
});

export default connect(mapStateToProps)(GameLogging);
