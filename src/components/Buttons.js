import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { typeScale, primaryFont } from '../utils';

export const BUTTON_MODIFIERS = {
    small: () => `
         padding: 8px;
         font-size: ${typeScale.helperText};
  `,
    large: () => `
        padding: 16px 24px;
        font-size: ${typeScale.header5};
  `,
    warning: ({ theme }) => `
        &:hover, &:focus {
         background-color: ${theme.status.warningColorHover};
         color: ${theme.textColorInverted};
       }

       &:active, &:focus {
         background-color: ${theme.status.warningColorActive};
         outline: 3px solid ${theme.status.warningColorHover};
         border-color: ${theme.status.warningColorHover};
    }
  `,
    primaryButtonWarning: ({ theme }) => `
        background-color: ${theme.status.warningColor};
        color: ${theme.textColorInverted};
  `,
    secondaryButtonWarning: ({ theme }) => `
        background-color: ${theme.textColorInverted};
        color:${theme.status.warningColor}; 
        border: 2px solid ${theme.status.warningColor};
  `,
    tertiaryButtonWarning: ({ theme }) => `
        background-color: ${theme.textColorInverted};
        color: ${theme.status.warningColor};
    `,
    error: ({ theme }) => `
       &:hover {
         background-color: ${theme.status.errorColorHover};
         color: ${theme.textColorInverted};
       }

       &:active {
         background-color: ${theme.status.errorColorActive};
         border-color: ${theme.status.errorColorActive};
       }
       &:focus {
            outline: 3px solid ${theme.status.errorColorHover};
       }
  `,
    primaryButtonError: ({ theme }) => `
      background-color: ${theme.status.errorColor};
      color: ${theme.textColorInverted};
  `,
    secondaryButtonError: ({ theme }) => `
      background-color: ${theme.textColorInverted};
      color:${theme.status.errorColor}; 
      border: 2px solid ${theme.status.errorColor};
  `,
    tertiaryButtonError: ({ theme }) => `
       background-color: ${theme.textColorInverted};
       color:${theme.status.errorColor}; 
   `,
    success: ({ theme }) => `
      &:hover {
        background-color: ${theme.status.successColorHover};
        color: ${theme.textColorInverted};
    }
      &:active {
        background-color: ${theme.status.successColorActive};
      }
  `,
    primaryButtonSuccess: ({ theme }) => `
       background-color: ${theme.status.successColor};
       color: ${theme.textColorInverted};
  `,
    secondaryButtonSuccess: ({ theme }) => `
       background-color: ${theme.textColorInverted};
       color:${theme.status.successColor};
       border: 2px solid ${theme.status.successColor};
  `,
    tertiaryButtonSuccess: ({ theme }) => `
      background-color: ${theme.textColorInverted};
      color:${theme.status.successColor};
    `,
};

export const Button = styled.button`
    padding: 8px 12px;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: ${primaryFont};
    font-size: ${typeScale.paragraph};
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background-color: ${(props) => props.theme.primaryHoverColor};
        color: ${(props) => props.theme.textColorOnPrimary};
        box-shadow: 0px 3px 14px 0px rgba(0,0,0,0.75);        
    }

    &:focus {
        outline: 3px solid ${(props) => props.theme.primaryHoverColor};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${(props) => props.theme.primaryActiveColor};
        border-color: ${(props) => props.theme.primaryActiveColor};
        color: ${(props) => props.theme.textColorOnPrimary};
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};
    border: 2px solid transparent;

    &:disabled {
        background-color: ${(props) => props.theme.disabled};
        color: ${(props) => props.theme.textOnDisabled};
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
    border: 2px solid ${(props) => props.theme.primaryColor};
    background: none;
    color: ${(props) => props.theme.primaryColor};

    &:disabled {
        background: none;
        border: 2px solid ${(props) => props.theme.disabled};
        color: ${(props) => props.theme.disabled};
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
    background: none;
    border: 2px solid transparent;
    color: ${(props) => props.theme.primaryColor};

    &:disabled {
        color: ${(props) => props.theme.disabled};
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
