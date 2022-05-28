import React from 'react';

import {BaseButton} from '@app/assets/style/theme';

export type ButtonProps = {
  onPress: () => void;
  children?: React.ReactNode;
};

const Button = ({onPress, children}: ButtonProps) => {
  return <BaseButton onPress={onPress}>{children}</BaseButton>;
};

export default Button;
