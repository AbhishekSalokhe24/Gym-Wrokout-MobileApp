import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HistoryStackParamList } from '../types/navigation.types';
import { ScreenHeader, CalendarHeatmap, WorkoutCard, Divider, EmptyState } from '../components';
import { colors, typography, spacing } from '../theme';

type HistoryScreenNavigationProp = NativeStackNavigationProp<HistoryStackParamList, 'History'>;

// Mock data for heatmap (30 days)
const mockHeatmapData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 3));

// Mock data for past workouts
const mockWorkouts = [
  {
    id: '1',
    title: 'Upper Body Power',
    duration: 65,
    exercisesCount: 6,
    totalVolume: 12500,
    exerciseNames: 'Bench Press · OHP · Pull-ups · Rows',
    date: 'Today',
  },
  {
    id: '2',
    title: 'Leg Day',
    duration: 75,
    exercisesCount: 5,
    totalVolume: 18400,
    exerciseNames: 'Squats · Leg Press · RDLs · Calf Raises',
    date: 'Yesterday',
  },
  {
    id: '3',
    title: 'Push Day',
    duration: 55,
    exercisesCount: 5,
    totalVolume: 9200,
    exerciseNames: 'Incline Bench · Dips · Lateral Raises',
    date: '3 Days Ago',
  },
  {
    id: '4',
    title: 'Pull Day',
    duration: 60,
    exercisesCount: 6,
    totalVolume: 11000,
    exerciseNames: 'Deadlifts · Barbell Rows · Bicep Curls',
    date: '5 Days Ago',
  },
];

export const HistoryScreen = () => {
  const navigation = useNavigation<HistoryScreenNavigationProp>();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <ScreenHeader title="HISTORY" showStripe />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh}
            tintColor={colors.onDark}
            colors={[colors.mBlueDark, colors.mRed]}
          />
        }
      >
        <View style={styles.heatmapSection}>
          <Text style={styles.sectionTitle}>ACTIVITY (LAST 30 DAYS)</Text>
          <CalendarHeatmap data={mockHeatmapData} currentDayIndex={29} />
        </View>

        <Divider style={styles.divider} />

        <Text style={styles.sectionTitle}>PAST WORKOUTS</Text>
        {mockWorkouts.length === 0 ? (
          <EmptyState icon="calendar-outline" message="No past workouts found." />
        ) : (
          <View style={styles.workoutList}>
            {mockWorkouts.map((workout) => (
              <View key={workout.id}>
                <Text style={styles.dateLabel}>{workout.date}</Text>
                <WorkoutCard
                  title={workout.title}
                  duration={workout.duration}
                  exercisesCount={workout.exercisesCount}
                  totalVolume={workout.totalVolume}
                  exerciseNames={workout.exerciseNames}
                  onPress={() => navigation.navigate('WorkoutDetail', { id: workout.id })}
                />
              </View>
            ))}
          </View>
        )}
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
  heatmapSection: {
    marginBottom: spacing.md,
    alignItems: 'center', // Center heatmap
  },
  sectionTitle: {
    ...typography.labelUpper,
    marginBottom: spacing.md,
    alignSelf: 'flex-start',
  },
  divider: {
    marginVertical: spacing.lg,
  },
  workoutList: {
    gap: spacing.md,
  },
  dateLabel: {
    ...typography.bodySm,
    color: colors.muted,
    marginBottom: spacing.xs,
  },
});
