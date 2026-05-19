import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors, typography } from '../theme';

interface InputProps extends TextInputProps {}

export const Input = ({ style, onFocus, onBlur, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[
        styles.input,
        isFocused && styles.inputFocused,
        style,
      ]}
      placeholderTextColor={colors.muted}
      onFocus={(e) => {
        setIsFocused(true);
        if (onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
      }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surfaceSoft,
    borderWidth: 1,
    borderColor: colors.hairline,
    borderRadius: 0,
    height: 48,
    paddingHorizontal: 16,
    color: colors.onDark,
    ...typography.bodyMd,
  },
  inputFocused: {
    borderColor: colors.onDark,
  },
});
