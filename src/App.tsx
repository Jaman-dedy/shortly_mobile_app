import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import theme from './assets/style/theme';
import Home from '@app/containers/Home';
// import History from '@app/containers/History';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="History"
            component={History}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
