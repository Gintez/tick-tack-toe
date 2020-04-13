import React, { ReactElement } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import createRootReducer from 'store/root-reducer';

interface HistoryProps {
  initialEntries?: Array<string>;
}

type ProviderOptions = HistoryProps & {
  initialStore?: any;
};

export const getAllTheProviders = (providerOptions: ProviderOptions = {}) => ({
  children,
}: any) => {
  const { initialStore = {} } = providerOptions;
  const store = createStore(createRootReducer, initialStore);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export const renderWithProviders = (
  ui: ReactElement,
  providerOptions?: ProviderOptions,
  renderOptions?: any
): RenderResult => {
  const Providers = getAllTheProviders(providerOptions);

  return render(ui, { wrapper: Providers, ...renderOptions });
};
