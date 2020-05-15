import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppRouter } from 'components';

import { configureStore } from './store/configureStore';
const { store, runSaga } = configureStore({});

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

runSaga();

ReactDOM.render(<App />, document.querySelector('#root'));
