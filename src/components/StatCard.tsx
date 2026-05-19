import React from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';
import { colors, typography, spacing } from '../theme';

interface StatCardProps extends ViewProps {
  value: string | number;
  label: string;
}

export const StatCard = ({ value, label, style, ...props }: StatCardProps) => {
  return (
    <View style={[styles.card, style]} {...props}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceCard,
    borderWidth: 1,
    borderColor: colors.hairline,
    borderRadius: 0,
    padding: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    ...typography.displaySm,
    marginBottom: spacing.xxs,
  },
  label: {
    ...typography.labelUpper,
  },
});
