import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';
import { ScreenHeader, Button, SetRow, Divider, RestTimer } from '../components';
import { colors, typography, spacing } from '../theme';

export const LogWorkoutScreen = () => {
  const [isRestTimerVisible, setIsRestTimerVisible] = useState(false);
  
  // Mock state for a single exercise
  const [sets, setSets] = useState([
    { id: 1, reps: '10', weight: '60', completed: true },
    { id: 2, reps: '8', weight: '70', completed: true },
    { id: 3, reps: '', weight: '', completed: false },
  ]);

  const handleCompleteSet = (id: number) => {
    setSets(sets.map(s => s.id === id ? { ...s, completed: !s.completed } : s));
    
    // Auto-start rest timer if completed
    const targetSet = sets.find(s => s.id === id);
    if (targetSet && !targetSet.completed) {
      setIsRestTimerVisible(true);
    }
  };

  const handleAddSet = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSets([...sets, { id: sets.length + 1, reps: '', weight: '', completed: false }]);
  };

  const handleAddExercise = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleRestTimer = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsRestTimerVisible(true);
  };

  const handleFinishWorkout = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <ScreenHeader title="LOG WORKOUT" />
        <Text style={styles.timer}>00:15:23</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Button title="+ ADD EXERCISE" variant="outline" onPress={handleAddExercise} style={styles.addExerciseBtn} />

        <View style={styles.exerciseSection}>
          <Text style={styles.exerciseTitle}>BENCH PRESS</Text>
          <Text style={styles.exerciseMeta}>Chest · Barbell</Text>

          <View style={styles.tableHeader}>
            <Text style={styles.headerCellNumber}>#</Text>
            <Text style={styles.headerCell}>REPS</Text>
            <Text style={styles.headerCell}>WEIGHT</Text>
            <Text style={styles.headerCellCheck}>✓</Text>
          </View>

          {sets.map((set, index) => (
            <SetRow
              key={set.id}
              setNumber={index + 1}
              reps={set.reps}
              weight={set.weight}
              isCompleted={set.completed}
              onUpdate={() => {}}
              onComplete={() => handleCompleteSet(set.id)}
            />
          ))}

          <Pressable onPress={handleAddSet} style={styles.addSetBtn}>
            <Text style={styles.addSetText}>+ ADD SET</Text>
          </Pressable>

          <Button 
            title="REST: 01:30" 
            variant="filled"
            onPress={handleRestTimer} 
            style={styles.restBtn}
          />
        </View>

        <Divider style={styles.divider} />

        <Button title="FINISH WORKOUT" variant="filled" onPress={handleFinishWorkout} style={styles.finishBtn} />
      </ScrollView>

      <RestTimer 
        visible={isRestTimerVisible}
        secondsRemaining={90}
        totalSeconds={90}
        onSkip={() => setIsRestTimerVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.canvas,
    paddingTop: 60,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: spacing.md,
  },
  timer: {
    ...typography.bodyStrong,
  },
  scrollContent: {
    padding: spacing.md,
    paddingBottom: spacing.xxl,
  },
  addExerciseBtn: {
    marginBottom: spacing.xl,
  },
  exerciseSection: {
    marginBottom: spacing.md,
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
  addSetBtn: {
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  addSetText: {
    ...typography.labelUpper,
    color: colors.onDark,
  },
  restBtn: {
    marginTop: spacing.md,
  },
  divider: {
    marginVertical: spacing.lg,
  },
  finishBtn: {
    backgroundColor: colors.mBlueDark,
    borderColor: colors.mBlueDark,
  },
});
