import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from '@shopify/restyle';

import {BaseButton, Box, Text, Theme} from '@app/assets/style/theme';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color: 'mainBackground' | 'mainForeground' | 'primary' | 'primaryDark';
  loading?: boolean;
};

const Button = ({text, onPress, color, loading}: ButtonProps) => {
  const theme = useTheme<Theme>();
  return (
    <BaseButton
      onPress={onPress}
      backgroundColor={color}
      marginTop="sm"
      style={theme.buttonVariant}>
      <Box flexDirection="row" justifyContent="center">
        {loading && <ActivityIndicator color="#fff" />}
        <Text variant="buttonText">{text}</Text>
      </Box>
    </BaseButton>
  );
};

export default Button;
