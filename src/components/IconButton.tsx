import React, { useState } from 'react';
import { Pressable, StyleSheet, PressableProps, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import * as Haptics from 'expo-haptics';

interface IconButtonProps extends PressableProps {
  icon: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export const IconButton = ({ 
  icon, 
  size = 22, 
  color = colors.onDark, 
  style, 
  onPress,
  ...props 
}: IconButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = (e: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (onPress) {
      onPress(e);
    }
  };

  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: isPressed ? colors.surfaceElevated : colors.surfaceCard },
        style,
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={handlePress}
      {...props}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 9999, // Only round element in the design system
    alignItems: 'center',
    justifyContent: 'center',
  },
});
