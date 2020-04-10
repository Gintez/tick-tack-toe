import React from 'react';

interface OwnProps {
  onClick?: () => void;
  children: string;
}

type Props = OwnProps;

const Button = (props: Props) => {
  const { children, onClick } = props;

  return (
    <button onClick={onClick}>{children}</button>
  );
}

export default Button;
