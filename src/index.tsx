import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme, ErrorBoundary } from './helpers';
import { Landing } from 'screens';

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Landing />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
