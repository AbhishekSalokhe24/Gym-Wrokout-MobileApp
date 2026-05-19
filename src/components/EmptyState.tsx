import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing } from '../theme';

interface EmptyStateProps {
  icon: keyof typeof Ionicons.glyphMap;
  message: string;
}

export const EmptyState = ({ icon, message }: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={48} color={colors.hairline} style={styles.icon} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  icon: {
    marginBottom: spacing.md,
  },
  message: {
    ...typography.bodyMd,
    color: colors.muted,
    textAlign: 'center',
  },
});
