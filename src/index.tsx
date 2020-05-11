import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme, ErrorBoundary } from './helpers';
import { AppRouter } from 'components';
import { Landing } from 'screens';

const App = () => {
  return (
    <AppRouter>
      <ErrorBoundary>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Landing />
        </ThemeProvider>
      </ErrorBoundary>
    </AppRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
