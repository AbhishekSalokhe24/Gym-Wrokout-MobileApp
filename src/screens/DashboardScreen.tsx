import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainTabsParamList } from '../types/navigation.types';
import { ScreenHeader, StatCard, WorkoutCard, Divider, IconButton, Skeleton } from '../components';
import { colors, typography, spacing } from '../theme';

type DashboardScreenNavigationProp = BottomTabNavigationProp<MainTabsParamList, 'Dashboard'>;

export const DashboardScreen = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const [refreshing, setRefreshing] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 1500); // Simulate initial load
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate network request
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  const renderSkeletons = () => (
    <>
      <View style={styles.statsGrid}>
        <Skeleton style={styles.statCard} height={80} />
        <Skeleton style={styles.statCard} height={80} />
        <Skeleton style={styles.statCard} height={80} />
        <Skeleton style={styles.statCard} height={80} />
      </View>
      <Divider style={styles.divider} />
      <Skeleton width={150} height={20} style={{ marginBottom: spacing.md }} />
      <Skeleton height={120} />
      <Divider style={styles.divider} />
      <Skeleton width={120} height={20} style={{ marginBottom: spacing.md }} />
      <View style={styles.prList}>
        <Skeleton height={24} style={{ marginBottom: spacing.sm }} />
        <Skeleton height={24} style={{ marginBottom: spacing.sm }} />
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="DASHBOARD" showStripe />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh}
            tintColor={colors.onDark}
            colors={[colors.mBlueDark, colors.mRed]} // Android
          />
        }
      >
        {initialLoading ? renderSkeletons() : (
          <>
            <View style={styles.statsGrid}>
              <StatCard value="12" label="WORKOUTS" style={styles.statCard} />
              <StatCard value="5" label="DAY STREAK" style={styles.statCard} />
              <StatCard value="24,500" label="TOTAL KG" style={styles.statCard} />
              <StatCard value="3" label="NEW PRS" style={styles.statCard} />
            </View>

            <Divider style={styles.divider} />

            <Text style={styles.sectionTitle}>TODAY'S WORKOUT</Text>
            <WorkoutCard 
              title="Upper Body"
              exercisesCount={5}
              totalVolume={18400}
              exerciseNames="Bench Press · Squats · Pull-ups"
            />

            <Divider style={styles.divider} />

            <Text style={styles.sectionTitle}>RECENT PRS</Text>
            <View style={styles.prList}>
              <View style={styles.prRow}>
                <Text style={styles.prName}>Bench Press</Text>
                <Text style={styles.prValue}>80kg ▲</Text>
              </View>
              <View style={styles.prRow}>
                <Text style={styles.prName}>Deadlift</Text>
                <Text style={styles.prValue}>120kg ▲</Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      <IconButton 
        icon="add" 
        size={32}
        style={styles.fab}
        onPress={() => navigation.navigate('Workout')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.canvas,
    paddingTop: 60, // Account for safe area roughly
  },
  scrollContent: {
    padding: spacing.md,
    paddingBottom: 100, // Make room for FAB
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
  },
  divider: {
    marginVertical: spacing.lg,
  },
  sectionTitle: {
    ...typography.labelUpper,
    marginBottom: spacing.md,
  },
  prList: {
    gap: spacing.sm,
  },
  prRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prName: {
    ...typography.bodyMd,
    color: colors.onDark,
  },
  prValue: {
    ...typography.bodyStrong,
    color: colors.success,
  },
  fab: {
    position: 'absolute',
    bottom: spacing.lg,
    right: spacing.lg,
    width: 56,
    height: 56,
    backgroundColor: colors.mBlueDark, // Make FAB stand out
    borderRadius: 9999,
  },
});
