import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';

interface CalendarHeatmapProps {
  // Simplified for now, just an array of active levels 0, 1, 2+
  data: number[];
  currentDayIndex?: number;
}

export const CalendarHeatmap = ({ data, currentDayIndex }: CalendarHeatmapProps) => {
  return (
    <View style={styles.container}>
      {data.map((level, index) => {
        const isCurrentDay = index === currentDayIndex;
        let backgroundColor = colors.surfaceSoft;
        
        if (level === 1) backgroundColor = `${colors.mBlueDark}80`; // 50% opacity
        if (level >= 2) backgroundColor = colors.mBlueDark;

        return (
          <View 
            key={index} 
            style={[
              styles.day, 
              { backgroundColor },
              isCurrentDay && styles.currentDay
            ]} 
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    padding: spacing.md,
  },
  day: {
    width: 24,
    height: 24,
    borderRadius: 0,
  },
  currentDay: {
    borderWidth: 1,
    borderColor: colors.onDark,
  },
});
