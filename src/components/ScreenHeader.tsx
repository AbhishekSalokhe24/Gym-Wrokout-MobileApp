import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MStripe } from './MStripe';
import { typography, spacing } from '../theme';

interface ScreenHeaderProps {
  title: string;
  showStripe?: boolean;
}

export const ScreenHeader = ({ title, showStripe = false }: ScreenHeaderProps) => {
  return (
    <View style={styles.container}>
      {showStripe && <MStripe style={styles.stripe} />}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  stripe: {
    marginBottom: spacing.md,
  },
  title: {
    ...typography.displayLg,
  },
});
