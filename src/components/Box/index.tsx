import React, {useState} from 'react';
import {Clipboard} from 'react-native';

import {Box, Text} from '@app/assets/style/theme';
import Button from '@app/components/common/Button';
import DeleteImg from '@app/assets/images/del.svg';
import IconButton from '@app/components/common/IconButton';
import {truncate} from '@app/helpers/truncateString';

type Props = {
  link: Record<string, string>;
  handleDeleteLink: (code: string) => void;
};

const BoxComponent = ({link, handleDeleteLink}: Props) => {
  const [buttonText, setButtonText] = useState('COPY');
  const [switchColor, setSwitchColor] = useState(false);
  const copyToClipboard = (url: string) => {
    Clipboard.setString(url);
    setButtonText('COPIED');
    setSwitchColor(true);
  };
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
        <Text variant="paragraph">{truncate(link?.original_link, 27)}</Text>
        <IconButton label="button" onPress={() => handleDeleteLink(link?.code)}>
          <DeleteImg />
        </IconButton>
      </Box>
      <Box borderBottomWidth={1} borderBottomColor="gray" alignSelf="stretch" />
      <Box padding="md">
        <Text color="primary" variant="paragraph">
          {link?.full_short_link}
        </Text>
        <Button
          onPress={() => copyToClipboard(link?.full_short_link)}
          text={buttonText}
          color={switchColor ? 'primaryDark' : 'primary'}
        />
      </Box>
    </Box>
  );
};

export default BoxComponent;
