import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import { Store } from 'redux';
import { IApplicationState } from '../src/store/common/types';

const Root: React.SFC<{store: Store<IApplicationState>}> = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
