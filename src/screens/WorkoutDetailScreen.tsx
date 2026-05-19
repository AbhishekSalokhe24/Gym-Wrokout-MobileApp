import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HistoryStackParamList } from '../types/navigation.types';
import { ScreenHeader, SetRow, Divider, StatCard } from '../components';
import { colors, typography, spacing } from '../theme';

type Props = NativeStackScreenProps<HistoryStackParamList, 'WorkoutDetail'>;

// Mock data for workout detail
const mockWorkoutDetails = {
  id: '1',
  title: 'Upper Body Power',
  date: 'Today, 18:30',
  duration: '1h 5m',
  totalVolume: '12,500 kg',
  prs: 2,
  exercises: [
    {
      id: 'e1',
      name: 'BENCH PRESS',
      meta: 'Chest · Barbell',
      sets: [
        { id: 1, reps: '8', weight: '80' },
        { id: 2, reps: '8', weight: '80' },
        { id: 3, reps: '6', weight: '85' }, // PR
      ]
    },
    {
      id: 'e2',
      name: 'OVERHEAD PRESS',
      meta: 'Shoulders · Barbell',
      sets: [
        { id: 1, reps: '10', weight: '50' },
        { id: 2, reps: '8', weight: '55' },
        { id: 3, reps: '8', weight: '55' },
      ]
    }
  ]
};

export const WorkoutDetailScreen = ({ route }: Props) => {
  // In a real app, fetch workout by route.params.id
  // const { id } = route.params;
  const workout = mockWorkoutDetails;

  return (
    <View style={styles.container}>
      <ScreenHeader title={workout.title} showBackButton />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.dateLabel}>{workout.date}</Text>

        <View style={styles.statsGrid}>
          <StatCard value={workout.duration} label="DURATION" style={styles.statCard} />
          <StatCard value={workout.totalVolume} label="VOLUME" style={styles.statCard} />
          <StatCard value={workout.prs.toString()} label="PRS HIT" style={styles.statCard} />
        </View>

        <Divider style={styles.divider} />

        {workout.exercises.map((exercise) => (
          <View key={exercise.id} style={styles.exerciseSection}>
            <Text style={styles.exerciseTitle}>{exercise.name}</Text>
            <Text style={styles.exerciseMeta}>{exercise.meta}</Text>

            <View style={styles.tableHeader}>
              <Text style={styles.headerCellNumber}>#</Text>
              <Text style={styles.headerCell}>REPS</Text>
              <Text style={styles.headerCell}>WEIGHT</Text>
              <Text style={styles.headerCellCheck}>✓</Text>
            </View>

            {exercise.sets.map((set, index) => (
              <SetRow
                key={set.id}
                setNumber={index + 1}
                reps={set.reps}
                weight={set.weight}
                isCompleted={true}
                onUpdate={() => {}}
                onComplete={() => {}}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.canvas,
    paddingTop: 60,
  },
  scrollContent: {
    padding: spacing.md,
    paddingBottom: spacing.xxl,
  },
  dateLabel: {
    ...typography.bodyMd,
    color: colors.muted,
    marginBottom: spacing.md,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
    minWidth: '30%', // Fit 3 in a row
  },
  divider: {
    marginVertical: spacing.lg,
  },
  exerciseSection: {
    marginBottom: spacing.xl,
  },
  exerciseTitle: {
    ...typography.titleLg,
  },
  exerciseMeta: {
    ...typography.caption,
    marginBottom: spacing.md,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.xs,
  },
  headerCellNumber: {
    ...typography.labelUpper,
    width: 30,
    textAlign: 'center',
  },
  headerCell: {
    ...typography.labelUpper,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: spacing.xs,
  },
  headerCellCheck: {
    ...typography.labelUpper,
    width: 48,
    textAlign: 'center',
    marginLeft: spacing.xs,
  },
});
