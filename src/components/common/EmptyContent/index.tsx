import React from 'react';
import {s} from 'react-native-size-matters';

import EmptyContentImg from '@app/assets/images/empty.svg';
import {Box, Text} from '@app/assets/style/theme';

const EmptyContent = () => {
  return (
    <Box padding="sm">
      <Text variant="paragraph">Sorry, your history is empty!</Text>
      <Box alignItems="center">
        <EmptyContentImg height={s(280)} width={250} />
      </Box>
      <Text variant="paragraph">
        click on the button below to shorten more links
      </Text>
    </Box>
  );
};

export default EmptyContent;
