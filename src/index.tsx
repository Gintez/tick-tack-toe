import * as React from 'react';
import { render } from 'react-dom';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';

import GlobalStyles from 'styles/global-styles';

import App from 'app';
import store from 'store';

render(
  <Provider store={store}>
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);
