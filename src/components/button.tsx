import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    padding: [10, 20],
    borderRadius: 6,
    border: 'none',
    cursor: 'pointer',
    textTransform: 'uppercase',
    background: '#F0F0F0',
    transition: '.5s background',

    '&:hover': {
      background: '#D9D9D9'
    }
  },
});

interface OwnProps {
  onClick?: () => void;
  children: string;
}

type Props = OwnProps;

const Button = (props: Props) => {
  const classes = useStyles();
  const { children, onClick } = props;

  return (
    <button className={classes.root} onClick={onClick}>{children}</button>
  );
}

export default Button;
