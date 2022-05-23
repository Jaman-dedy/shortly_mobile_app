import {createBox, createText, createTheme} from '@shopify/restyle';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {textVariants} from './variants';

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
};

const theme = createTheme({
  spacing: {
    s: 8,
    m: 16,
  },
  colors: {
    mainBackground: palette.lightGray,
    mainForeground: palette.veryDarkViolet,
  },
  breakpoints: {},
  textVariants,
  cardVariants: {
    primary: {
      backgroundColor: 'primaryCardBackground',
      shadowOpacity: 0.3,
    },
    secondary: {
      backgroundColor: 'secondaryCardBackground',
      shadowOpacity: 0.1,
    },
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.backgroundColor,
    mainForeground: palette.backgroundColor,
  },
};

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const BaseButton = createBox<Theme, TouchableOpacityProps>(
  TouchableOpacity,
);

export default theme;
