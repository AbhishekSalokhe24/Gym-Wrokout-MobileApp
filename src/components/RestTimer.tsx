import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { Button } from './Button';
import { colors, typography, spacing } from '../theme';

interface RestTimerProps {
  visible: boolean;
  secondsRemaining: number;
  totalSeconds: number;
  onSkip: () => void;
}

export const RestTimer = ({ visible, secondsRemaining, totalSeconds, onSkip }: RestTimerProps) => {
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const radius = 120;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (secondsRemaining / totalSeconds) * circumference;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.container}>
        <View style={styles.timerContainer}>
          <Svg height="300" width="300" viewBox="0 0 300 300">
            <Circle
              cx="150"
              cy="150"
              r={radius}
              stroke={colors.surfaceElevated}
              strokeWidth={strokeWidth}
              fill="none"
            />
            <Circle
              cx="150"
              cy="150"
              r={radius}
              stroke={colors.mBlueDark}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="square"
              transform="rotate(-90 150 150)"
            />
          </Svg>
          <View style={styles.textContainer}>
            <Text style={styles.timeText}>{formatTime(secondsRemaining)}</Text>
            <Text style={styles.label}>REST</Text>
          </View>
        </View>

        <Button title="SKIP REST" onPress={onSkip} style={styles.skipButton} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  timeText: {
    ...typography.displayXl,
  },
  label: {
    ...typography.labelUpper,
    marginTop: spacing.xs,
  },
  skipButton: {
    position: 'absolute',
    bottom: spacing.xxl,
    width: 200,
  },
});
