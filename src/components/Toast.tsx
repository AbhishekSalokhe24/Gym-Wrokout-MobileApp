import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing } from '../theme';

interface ToastProps {
  message: string;
  type?: 'error' | 'success';
  onHide?: () => void;
}

export const Toast = ({ message, type = 'error', onHide }: ToastProps) => {
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(translateY, {
        toValue: 50,
        useNativeDriver: true,
      }),
      Animated.delay(3000),
      Animated.timing(translateY, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onHide) onHide();
    });
  }, [translateY, onHide]);

  const isError = type === 'error';
  const backgroundColor = isError ? colors.mRed : colors.success;
  const iconName = isError ? 'alert-circle' : 'checkmark-circle';

  return (
    <Animated.View style={[styles.container, { backgroundColor, transform: [{ translateY }] }]}>
      <Ionicons name={iconName} size={20} color={colors.onDark} style={styles.icon} />
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: 8,
    zIndex: 9999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  icon: {
    marginRight: spacing.sm,
  },
  message: {
    ...typography.bodyStrong,
    color: colors.onDark,
    flex: 1,
  },
});
