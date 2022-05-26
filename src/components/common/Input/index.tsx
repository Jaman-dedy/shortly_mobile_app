/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useTheme} from '@shopify/restyle';
import {TextInput, StyleSheet} from 'react-native';

import {Theme} from '@app/assets/style/theme';

type inputProps = {
  placeholder?: string;
  formData: Record<string, string>;
  errors: Record<string, string>;
  onChangeText: (text: string) => void;
};

const Input = ({placeholder, formData, onChangeText, errors}: inputProps) => {
  const theme = useTheme<Theme>();
  const styles = StyleSheet.create({
    input: {
      ...theme.inputVariant,
      borderColor: errors?.message ? 'red' : 'white',
      color: errors?.message ? 'red' : 'white',
      backgroundColor: 'white',
      textAlign: 'center',
    },
  });
  return (
    <TextInput
      value={errors?.message ? errors.message : formData?.link}
      onChangeText={onChangeText}
      style={styles.input}
      placeholder={placeholder}
    />
  );
};

export default Input;
