import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';
import { ScreenHeader, Button, Divider, StatCard } from '../components';
import { colors, typography, spacing } from '../theme';

export const ProfileScreen = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const renderSettingRow = (icon: keyof typeof Ionicons.glyphMap, title: string, value?: string, hasSwitch?: boolean, switchValue?: boolean) => (
    <Pressable style={styles.settingRow}>
      <View style={styles.settingLeft}>
        <Ionicons name={icon} size={24} color={colors.onDark} style={styles.settingIcon} />
        <Text style={styles.settingTitle}>{title}</Text>
      </View>
      <View style={styles.settingRight}>
        {hasSwitch ? (
          <Switch 
            value={switchValue} 
            trackColor={{ false: colors.surfaceSoft, true: colors.mBlueDark }}
            thumbColor={colors.onDark}
          />
        ) : (
          <>
            {value && <Text style={styles.settingValue}>{value}</Text>}
            <Ionicons name="chevron-forward" size={20} color={colors.muted} />
          </>
        )}
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="PROFILE" showStripe />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user?.name?.charAt(0) || 'U'}</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{user?.name || 'User'}</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <StatCard value="82.5" label="WEIGHT (KG)" style={styles.statCard} />
          <StatCard value="180" label="HEIGHT (CM)" style={styles.statCard} />
        </View>

        <Divider style={styles.divider} />

        <Text style={styles.sectionTitle}>PREFERENCES</Text>
        <View style={styles.settingsGroup}>
          {renderSettingRow('barbell-outline', 'Units', 'Metric')}
          {renderSettingRow('moon-outline', 'Dark Mode', '', true, true)}
          {renderSettingRow('notifications-outline', 'Notifications', '', true, false)}
        </View>

        <Text style={styles.sectionTitle}>ACCOUNT</Text>
        <View style={styles.settingsGroup}>
          {renderSettingRow('person-outline', 'Edit Profile')}
          {renderSettingRow('shield-checkmark-outline', 'Privacy')}
          {renderSettingRow('help-circle-outline', 'Help & Support')}
        </View>

        <Button 
          title="LOGOUT" 
          variant="outline" 
          style={styles.logoutBtn}
          textStyle={styles.logoutText}
          onPress={handleLogout}
        />
        
        <Text style={styles.versionText}>Gym Tracker v1.0.0</Text>
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.surfaceCard,
    borderWidth: 2,
    borderColor: colors.mBlueLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  avatarText: {
    ...typography.titleLg,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    ...typography.titleLg,
    marginBottom: spacing.xxs,
  },
  email: {
    ...typography.bodyMd,
    color: colors.muted,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
  },
  divider: {
    marginVertical: spacing.lg,
  },
  sectionTitle: {
    ...typography.labelUpper,
    marginBottom: spacing.md,
  },
  settingsGroup: {
    backgroundColor: colors.surfaceCard,
    borderWidth: 1,
    borderColor: colors.hairline,
    marginBottom: spacing.xl,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: spacing.md,
  },
  settingTitle: {
    ...typography.bodyMd,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    ...typography.bodyMd,
    color: colors.muted,
    marginRight: spacing.xs,
  },
  logoutBtn: {
    marginTop: spacing.md,
    borderColor: colors.mRed,
  },
  logoutText: {
    color: colors.mRed,
  },
  versionText: {
    ...typography.caption,
    textAlign: 'center',
    marginTop: spacing.xl,
    color: colors.muted,
  },
});
