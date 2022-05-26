import React from 'react';
import {useTheme} from '@shopify/restyle';

import {BaseButton, Text, Theme} from '@app/assets/style/theme';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color: 'mainBackground' | 'mainForeground' | 'primary';
};

const Button = ({text, onPress, color}: ButtonProps) => {
  const theme = useTheme<Theme>();
  return (
    <BaseButton
      onPress={onPress}
      backgroundColor={color}
      marginTop="sm"
      style={theme.buttonVariant}>
      <Text variant="buttonText">{text}</Text>
    </BaseButton>
  );
};

export default Button;
