import { create } from "@storybook/theming/create";
import { defaultTheme, primaryFont } from '../src/utils';


export default create({
    base: "light",
    colorPrimary: defaultTheme.textColor,
    colorSecondary: defaultTheme.primaryColor,

    // UI
    appBg: "white",
    appContentBg: defaultTheme.textColorInverted,
    appBorderColor: defaultTheme.formElementBackground,
    appBorderRadius: 4,

    // Typography
    fontBase: primaryFont,
    fontCode: "monospace",

    // Text colors
    textColor: defaultTheme.textColor,
    textInverseColor: defaultTheme.textColorInverted,

    // Toolbar default and active colors
    barTextColor: defaultTheme.textColor,
    barSelectedColor: defaultTheme.primaryColor,
    barBg: defaultTheme.textColorInverted,

    // Form colors
    inputBg: defaultTheme.textColorInverted,
    inputBorder: defaultTheme.textFieldBackground,
    inputTextColor: defaultTheme.textColor,
    inputBorderRadius: 4,

    brandTitle: "Mental Models Dictionary storybook",
    brandUrl: "https://example.com",
    brandImage: "https://placehold.it/350x150"
});