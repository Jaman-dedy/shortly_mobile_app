import React from 'react';

import HomeImg from '@app/assets/images/illustration.svg';
import {Box, Text} from '@app/assets/style/theme';

const HomeContent = () => {
  return (
    <Box flex={3} backgroundColor="offBackground">
      <Text variant="header" color="text" paddingTop="lg">
        Shortly
      </Text>
      <Box>
        <HomeImg />
        <Box paddingBottom="sm">
          <Text variant="subHeader">Let's get started</Text>
          <Text variant="paragraph">
            {'Paste your first link into\nthe field to shorten it'}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeContent;
