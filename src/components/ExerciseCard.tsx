import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing } from '../theme';

interface ExerciseCardProps {
  name: string;
  muscleGroup: string;
  equipment?: string;
  onPress?: () => void;
}

export const ExerciseCard = ({ name, muscleGroup, equipment, onPress }: ExerciseCardProps) => {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>
          {muscleGroup}{equipment ? ` · ${equipment}` : ''}
        </Text>
      </View>
      {onPress && (
        <Ionicons name="chevron-forward" size={20} color={colors.muted} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceCard,
    borderWidth: 1,
    borderColor: colors.hairline,
    padding: spacing.md,
    marginBottom: spacing.xs,
  },
  cardPressed: {
    backgroundColor: colors.surfaceElevated,
  },
  content: {
    flex: 1,
  },
  name: {
    ...typography.titleLg,
    marginBottom: spacing.xxs,
  },
  details: {
    ...typography.caption,
    color: colors.muted,
  },
});
