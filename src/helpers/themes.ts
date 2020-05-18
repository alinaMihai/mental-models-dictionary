import { neutral, yellow, green, red } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
  primaryColor: green[100],
  primaryHoverColor: green[200],
  primaryActiveColor: green[300],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[700],
  textColorOnPrimary: neutral[100],
  textColor: neutral[700],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[500],
  accentLight: yellow[200],
  accentDark: yellow[100],
  status: {
    warningColor: yellow[200],
    warningColorHover: yellow[100],
    warningColorActive: yellow[100],
    warningTextColor: neutral[600],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[200],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  formElementBackground: green[300],
  textOnFormElementBackground: neutral[100],
  textColorOnPrimary: green[100],
  textColor: green[100],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[100],
  accentLight: yellow[200],
  accentDark: yellow[100],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[100],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[200],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
