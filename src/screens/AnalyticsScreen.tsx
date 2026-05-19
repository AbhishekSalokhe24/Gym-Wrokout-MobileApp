import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ScreenHeader, CategoryTabs, StatCard, Divider, EmptyState } from '../components';
import { colors, typography, spacing } from '../theme';

const TABS = ['VOLUME', 'MUSCLE', 'PRS', 'FREQUENCY'];

export const AnalyticsScreen = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const renderVolumeContent = () => (
    <View style={styles.tabContent}>
      <Text style={styles.chartTitle}>WEEKLY VOLUME (KG)</Text>
      <View style={styles.placeholderChart}>
        {/* Simple CSS bar chart representation */}
        {[40, 60, 30, 80, 50, 90, 70].map((height, i) => (
          <View key={i} style={styles.barContainer}>
            <View style={[styles.bar, { height: `${height}%` }]} />
            <Text style={styles.barLabel}>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</Text>
          </View>
        ))}
      </View>
      <View style={styles.statsRow}>
        <StatCard value="24.5k" label="THIS WEEK" style={styles.statCard} />
        <StatCard value="+12%" label="VS LAST WEEK" style={styles.statCard} />
      </View>
    </View>
  );

  const renderMuscleContent = () => (
    <View style={styles.tabContent}>
      <Text style={styles.chartTitle}>MUSCLE GROUP BREAKDOWN</Text>
      <View style={styles.placeholderPieChart}>
        {/* Placeholder for pie chart/list */}
        <View style={styles.muscleRow}>
          <Text style={styles.muscleName}>Chest</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '35%' }]} />
          </View>
          <Text style={styles.muscleValue}>35%</Text>
        </View>
        <View style={styles.muscleRow}>
          <Text style={styles.muscleName}>Back</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '25%' }]} />
          </View>
          <Text style={styles.muscleValue}>25%</Text>
        </View>
        <View style={styles.muscleRow}>
          <Text style={styles.muscleName}>Legs</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '20%' }]} />
          </View>
          <Text style={styles.muscleValue}>20%</Text>
        </View>
        <View style={styles.muscleRow}>
          <Text style={styles.muscleName}>Arms</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '15%' }]} />
          </View>
          <Text style={styles.muscleValue}>15%</Text>
        </View>
      </View>
    </View>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'VOLUME': return renderVolumeContent();
      case 'MUSCLE': return renderMuscleContent();
      default:
        return (
          <EmptyState 
            icon="bar-chart-outline" 
            message={`${activeTab} DATA COMING SOON`} 
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <ScreenHeader title="ANALYTICS" showStripe />
      
      <CategoryTabs 
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderContent()}
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
  tabContent: {
    marginTop: spacing.md,
  },
  chartTitle: {
    ...typography.labelUpper,
    marginBottom: spacing.lg,
  },
  placeholderChart: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
    paddingBottom: spacing.xs,
  },
  barContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
    width: 30,
  },
  bar: {
    width: 20,
    backgroundColor: colors.mBlueDark,
  },
  barLabel: {
    ...typography.caption,
    marginTop: spacing.xs,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
  },
  emptyContent: {
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  emptyText: {
    ...typography.bodyMd,
    color: colors.muted,
  },
  placeholderPieChart: {
    gap: spacing.md,
  },
  muscleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  muscleName: {
    ...typography.bodyMd,
    width: 60,
  },
  progressTrack: {
    flex: 1,
    height: 8,
    backgroundColor: colors.surfaceSoft,
    marginHorizontal: spacing.sm,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.mRed,
  },
  muscleValue: {
    ...typography.bodyStrong,
    width: 40,
    textAlign: 'right',
  },
});
