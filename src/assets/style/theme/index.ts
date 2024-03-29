import {createBox, createText, createTheme} from '@shopify/restyle';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
// import {s} from 'react-native-size-matters';

import {textVariants, buttonVariant, inputVariant} from './variants';

export const palette = {
  primary: '#2ACFCF',
  primaryDark: '#3B3054',
  secondary: '#F46262',
  lightGray: '#BFBFBF',
  Gray: '#9E9AA7',
  grayishViolet: '#35323E',
  veryDarkViolet: '#232127',
  backgroundColor: '#FFFFFF',
  backgroundColorOff: '#F0F1F6',
  text: '#35323E',
};

const theme = createTheme({
  spacing: {
    sm: 8,
    md: 16,
    lg: 22,
    xlg: 28,
  },
  colors: {
    offBackground: palette.backgroundColorOff,
    mainBackground: palette.backgroundColor,
    mainForeground: palette.veryDarkViolet,
    sideBarBackground: palette.primaryDark,
    primaryDark: palette.primaryDark,
    text: palette.text,
    primary: palette.primary,
    gray: palette.Gray,
  },
  breakpoints: {},
  textVariants,
  buttonVariant,
  inputVariant,
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
};

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const BaseButton = createBox<Theme, TouchableOpacityProps>(
  TouchableOpacity,
);

export default theme;
