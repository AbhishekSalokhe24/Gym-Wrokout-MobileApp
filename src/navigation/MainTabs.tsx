import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MainTabsParamList } from '../types/navigation.types';
import { DashboardScreen, LogWorkoutScreen, AnalyticsScreen, ProfileScreen } from '../screens';
import { HistoryStack } from './HistoryStack';
import { colors, typography } from '../theme';

const Tab = createBottomTabNavigator<MainTabsParamList>();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.canvas,
          borderTopWidth: 1,
          borderTopColor: colors.hairline,
          height: 80,
          paddingBottom: 16,
          paddingTop: 8,
        },
        tabBarActiveTintColor: colors.onDark,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: {
          ...typography.labelUpper,
          fontSize: 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          switch (route.name) {
            case 'Dashboard':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Workout':
              iconName = focused ? 'add-circle' : 'add-circle-outline';
              break;
            case 'HistoryStack':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'Analytics':
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{ tabBarLabel: 'HOME' }} 
      />
      <Tab.Screen 
        name="Workout" 
        component={LogWorkoutScreen} 
        options={{ tabBarLabel: 'WORKOUT' }} 
      />
      <Tab.Screen 
        name="HistoryStack" 
        component={HistoryStack} 
        options={{ tabBarLabel: 'HISTORY' }} 
      />
      <Tab.Screen 
        name="Analytics" 
        component={AnalyticsScreen} 
        options={{ tabBarLabel: 'ANALYTICS' }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarLabel: 'PROFILE' }} 
      />
    </Tab.Navigator>
  );
};
