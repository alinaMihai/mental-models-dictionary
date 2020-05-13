import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from 'components';

const App = () => {
  return <AppRouter />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
