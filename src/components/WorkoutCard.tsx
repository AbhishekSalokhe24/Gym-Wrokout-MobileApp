import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, typography, spacing } from '../theme';

interface WorkoutCardProps {
  title: string;
  duration?: number;
  exercisesCount: number;
  totalVolume: number;
  exerciseNames?: string;
  onPress?: () => void;
}

export const WorkoutCard = ({ 
  title, 
  duration, 
  exercisesCount, 
  totalVolume,
  exerciseNames,
  onPress 
}: WorkoutCardProps) => {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {duration && (
          <Text style={styles.duration}>{duration} min</Text>
        )}
      </View>
      
      <Text style={styles.stats}>
        {exercisesCount} exercises · {totalVolume.toLocaleString()}kg
      </Text>
      
      {exerciseNames && (
        <Text style={styles.exercises} numberOfLines={1}>
          {exerciseNames}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceCard,
    borderWidth: 1,
    borderColor: colors.hairline,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  cardPressed: {
    backgroundColor: colors.surfaceElevated,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  title: {
    ...typography.titleLg,
  },
  duration: {
    ...typography.labelUpper,
  },
  stats: {
    ...typography.bodyMd,
    color: colors.bodyStrong,
    marginBottom: spacing.xxs,
  },
  exercises: {
    ...typography.bodySm,
    color: colors.muted,
  },
});
