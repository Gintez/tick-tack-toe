import React from 'react';
import { createUseStyles } from 'react-jss';

import { ROWS } from 'types/constants';

import Cell from './cell';

const useStyles = createUseStyles({
  root: {
    padding: 5,
  },
  row: {
    display: 'flex',
  },
});

export const Board = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {ROWS.map((row, index) => (
        <div data-qa="board-row" key={index} className={classes.row}>
          {row.map(cellId => (
            <Cell key={cellId} cellId={cellId} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
