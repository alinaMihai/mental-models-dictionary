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
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${theme.status.warningColorHover};
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
    border: 2px solid ${theme.status.warningColor};
  `,
    tertiaryButtonWarning: ({ theme }) => `
      background-color: ${theme.textColorInverted};
      color: ${theme.primaryColor};
      &:hover {
          background-color: ${theme.status.warningColor}; 
          color: ${theme.textColorInverted};
      }
    `,
    error: ({ theme }) => `
  background-color: ${theme.status.errorColor};
  color: ${theme.textColorInverted};

  &:hover {
    background-color: ${theme.status.errorColorHover};
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
    border: 2px solid ${theme.status.errorColor};
  `,
    tertiaryButtonError: ({ theme }) => `
       &:hover {
            background-color: ${theme.status.errorColor};
            color: ${theme.textColorInverted};
       }
   `,
    success: ({ theme }) => `
  background-color: ${theme.status.successColor};
  color: ${theme.textColorInverted};

  &:hover {
    background-color: ${theme.status.successColorHover};
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
    border: 2px solid ${theme.status.successColor};
  `,
    tertiaryButtonSuccess: ({ theme }) => `
             &:hover {
               background-color: ${theme.status.successColor};
               color: ${theme.textColorInverted};
             }
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
