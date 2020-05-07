import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme, darkTheme, ErrorBoundary } from './utils';
import { SecondaryButton, PrimaryButton, TertiaryButton } from './components';

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
        <div
          style={{
            backgroundColor: isDarkTheme
              ? defaultTheme.primaryColor
              : darkTheme.primaryColor,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <PrimaryButton onClick={() => setDarkTheme(!isDarkTheme)}>
            Dark theme
          </PrimaryButton>
          <PrimaryButton>Primary Button</PrimaryButton>
          <SecondaryButton>Secondary</SecondaryButton>
          <TertiaryButton>Tertiary</TertiaryButton>
          <GlobalStyle />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
