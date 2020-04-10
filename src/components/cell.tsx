import React from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import clsx from 'clsx';

import { Players } from 'types';
import { PLAYER_SIGNS } from 'types/constants';
import { getCellValue, getCurrentPlayer, getWinner } from 'store/selectors';
import * as actions from 'store/actions';

const useStyles = createUseStyles({
  root: {
    height: 100,
    width: 100,
    backgroundColor: 'grey',
    border: '1px solid white',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
  },
  disabled: {
    opacity: 0.5
  }
});

interface DispatchProps {
  actions: typeof actions;
}

interface OwnProps {
  cellId: string;
}

interface StateProps {
  cellValue: Players;
  currentPlayer: Players;
  winner: Players;
}

type Props = OwnProps & StateProps & DispatchProps;

const Cell = (props: Props) => {
  const classes = useStyles();
  const { cellValue, actions, cellId, currentPlayer, winner } = props;

  function setCellValue() {
    actions.setCellValue({
      cellId,
      cellValue: PLAYER_SIGNS[currentPlayer],
    });
  }

  function handleCellClick() {
    !cellValue && !winner && setCellValue();
  }

  return (
    <div
      data-qa="cell"
      onClick={handleCellClick}
      className={clsx(classes.root, { [classes.disabled]: !!winner })}
    >
      {cellValue || ''}
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  actions: bindActionCreators(actions, dispatch),
});

const mapStateToProps = (state: any, ownProps: OwnProps): StateProps => ({
  cellValue: getCellValue(state, { cellId: ownProps?.cellId }),
  currentPlayer: getCurrentPlayer(state),
  winner: getWinner(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
