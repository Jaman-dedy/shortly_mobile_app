import React from 'react';
import {Text, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import theme from './assets/style/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>app</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
