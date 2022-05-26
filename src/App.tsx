import React from 'react';
import {ThemeProvider} from '@shopify/restyle';

import theme from './assets/style/theme';
import Home from '@app/containers/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
