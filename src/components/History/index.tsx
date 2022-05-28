import React from 'react';
import {ScrollView} from 'react-native';

import {Box, Text} from '@app/assets/style/theme';

import BoxComponent from '@app/components/Box';

const History = () => {
  return (
    <Box flex={3} backgroundColor="offBackground" marginTop="md">
      <Text variant="paragraph">Your Link History</Text>
      <ScrollView>
        <Box marginTop="md">
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default History;
