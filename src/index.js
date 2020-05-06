import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from './utils';
import { SecondaryButton, PrimaryButton, TertiaryButton } from './components';

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <div>
                <PrimaryButton modifiers={['small', 'warning', 'primaryButtonWarning']}>Primary Button</PrimaryButton>
                <SecondaryButton modifiers={['large', 'warning', 'secondaryButtonWarning']}>Secondary</SecondaryButton>
                <TertiaryButton modifiers={['warning', 'tertiaryButtonWarning']}>Tertiary</TertiaryButton>
                <div>
                    <PrimaryButton modifiers={['small', 'error', 'primaryButtonError']}>Primary Button</PrimaryButton>
                    <SecondaryButton modifiers={['large', 'error', 'secondaryButtonError']}>Secondary</SecondaryButton>
                    <TertiaryButton modifiers={['error', 'tertiaryButtonError']}>Tertiary</TertiaryButton>
                </div>
                <div>
                    <PrimaryButton modifiers={['small', 'success', 'primaryButtonSuccess']}>Primary Button</PrimaryButton>
                    <SecondaryButton modifiers={['large', 'success', 'secondaryButtonSuccess']}>
                        Secondary
                    </SecondaryButton>
                    <TertiaryButton modifiers={['success', 'tertiaryButtonSuccess']}>Tertiary</TertiaryButton>
                </div>
                <GlobalStyle />
            </div>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
