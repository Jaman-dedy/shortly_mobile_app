import React from 'react';

import {BaseButton} from '@app/assets/style/theme';

export type ButtonProps = {
  onPress: () => void;
  children?: React.ReactNode;
  label?: string;
};

const Button = ({onPress, children, label}: ButtonProps) => {
  return (
    <BaseButton accessibilityLabel={label} onPress={onPress}>
      {children}
    </BaseButton>
  );
};

export default Button;
