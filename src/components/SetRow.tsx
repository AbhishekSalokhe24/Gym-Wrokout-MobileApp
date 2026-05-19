import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { colors, typography, spacing } from '../theme';

interface SetRowProps {
  setNumber: number;
  reps?: string;
  weight?: string;
  isCompleted?: boolean;
  onUpdate: (reps: string, weight: string) => void;
  onComplete: () => void;
}

export const SetRow = ({ 
  setNumber, 
  reps: initialReps = '', 
  weight: initialWeight = '', 
  isCompleted = false,
  onUpdate,
  onComplete
}: SetRowProps) => {
  const [reps, setReps] = useState(initialReps);
  const [weight, setWeight] = useState(initialWeight);

  const handleComplete = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onComplete();
  };

  const handleUpdate = () => {
    onUpdate(reps, weight);
  };

  return (
    <View style={[styles.container, isCompleted && styles.containerCompleted]}>
      <Text style={styles.setNumber}>{setNumber}</Text>
      
      <TextInput
        style={[styles.input, isCompleted && styles.inputCompleted]}
        keyboardType="numeric"
        value={reps}
        onChangeText={setReps}
        onBlur={handleUpdate}
        placeholder="0"
        placeholderTextColor={colors.muted}
        editable={!isCompleted}
      />
      
      <TextInput
        style={[styles.input, isCompleted && styles.inputCompleted]}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
        onBlur={handleUpdate}
        placeholder="0.0"
        placeholderTextColor={colors.muted}
        editable={!isCompleted}
      />
      
      <Pressable 
        style={[styles.checkButton, isCompleted && styles.checkButtonCompleted]}
        onPress={handleComplete}
      >
        <Ionicons 
          name="checkmark" 
          size={24} 
          color={isCompleted ? colors.canvas : colors.muted} 
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceSoft,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.xs,
  },
  containerCompleted: {
    backgroundColor: colors.surfaceElevated,
  },
  setNumber: {
    ...typography.labelUpper,
    width: 30,
    textAlign: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: colors.hairline,
    backgroundColor: colors.canvas,
    color: colors.onDark,
    textAlign: 'center',
    marginHorizontal: spacing.xs,
    ...typography.bodyMd,
  },
  inputCompleted: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  checkButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surfaceCard,
    borderWidth: 1,
    borderColor: colors.hairline,
    marginLeft: spacing.xs,
  },
  checkButtonCompleted: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
});
