import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from './utils';
import { SecondaryButton, PrimaryButton, TertiaryButton } from './components';

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <div>
                <PrimaryButton modifiers={['small', 'success']}>Primary Button</PrimaryButton>
                <SecondaryButton modifiers={['large', 'success', 'secondaryButtonSuccess']}>Secondary</SecondaryButton>
                <TertiaryButton modifiers={['success', 'tertiaryButtonSuccess']}>Tertiary</TertiaryButton>
                <GlobalStyle />
            </div>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
