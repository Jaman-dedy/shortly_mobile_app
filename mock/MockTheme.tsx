import React from 'react';

import baseTheme from '../src/assets/style/theme';
import {ThemeProvider, createTheme} from '@shopify/restyle';
import {palette} from '../src/assets/style/theme/index';

const MockThemes = ({children}) => {
  const theme = createTheme({
    ...baseTheme,
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
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MockThemes;
