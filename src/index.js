import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme, darkTheme } from './utils';
import { SecondaryButton, PrimaryButton, TertiaryButton } from './components';

const App = () => {
    const [isDarkTheme, setDarkTheme] = useState(false);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
            <div
                style={{
                    backgroundColor: isDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <PrimaryButton modifiers={['large']} onClick={() => setDarkTheme(!isDarkTheme)}>
                    Switch to dark theme
                </PrimaryButton>
                <PrimaryButton>Primary Button</PrimaryButton>
                <SecondaryButton>Secondary</SecondaryButton>
                <TertiaryButton>Tertiary</TertiaryButton>
                <GlobalStyle />
            </div>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
