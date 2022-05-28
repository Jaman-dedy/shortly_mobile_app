import React from 'react';

import {Box, Text} from '@app/assets/style/theme';
import Button from '@app/components/common/Button';
import DeleteImg from '@app/assets/images/del.svg';
import IconButton from '@app/components/common/IconButton';

const BoxComponent = () => {
  return (
    <Box
      backgroundColor="mainBackground"
      borderRadius={6}
      alignItems="center"
      marginLeft="md"
      marginBottom="md"
      marginRight="md">
      <Box
        padding="lg"
        flexDirection="row"
        justifyContent="space-between"
        alignSelf="stretch">
        <Text variant="paragraph">https://www.spiegel.del/sie...</Text>
        <IconButton>
          <DeleteImg />
        </IconButton>
      </Box>
      <Box borderBottomWidth={1} borderBottomColor="gray" alignSelf="stretch" />
      <Box padding="md">
        <Text color="primary" variant="paragraph">
          https://rel.ink/k4lkyk
        </Text>
        <Button text="COPY" color="primary" />
      </Box>
    </Box>
  );
};

export default BoxComponent;
