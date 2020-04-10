import React, { Fragment } from 'react';
import injectSheet from 'react-jss';

const styles: any = () => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: '0px',
      fontFamily: ['Arial', 'Helvetica', 'sans-serif'],
      fontSize: '16px',
      letterSpacing: '.4px',
      lineHeight: '30px',
    },
  },
});

const GlobalStyles = () => React.createElement(Fragment, null);

export default injectSheet(styles)(GlobalStyles);
