import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, PressableProps, ViewStyle } from 'react-native';
import * as Haptics from 'expo-haptics';
import { colors, typography, spacing } from '../theme';

interface ButtonProps extends PressableProps {
  title: string;
  variant?: 'filled' | 'outline';
  style?: ViewStyle;
}

export const Button = ({ title, variant = 'outline', style, onPress, ...props }: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const handlePress = (e: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (onPress) {
      onPress(e);
    }
  };

  const isFilled = variant === 'filled';
  const backgroundColor = isPressed 
    ? colors.surfaceElevated 
    : (isFilled ? colors.surfaceCard : 'transparent');

  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor },
        style,
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
      {...props}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.onDark,
    borderRadius: 0,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...typography.button,
  },
});
