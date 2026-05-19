import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { AuthStack } from './AuthStack';
import { MainTabs } from './MainTabs';
import { LoadingState } from '../components';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme';
import { View } from 'react-native';

export const AppNavigator = () => {
  const { token, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.canvas }}>
      <StatusBar style="light" />
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: colors.onDark,
            background: colors.canvas,
            card: colors.surfaceCard,
            text: colors.onDark,
            border: colors.hairline,
            notification: colors.mRed,
          },
        }}
      >
        {token ? <MainTabs /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
};
