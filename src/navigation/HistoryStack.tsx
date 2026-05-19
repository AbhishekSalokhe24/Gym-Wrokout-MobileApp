import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HistoryStackParamList } from '../types/navigation.types';
import { HistoryScreen, WorkoutDetailScreen } from '../screens';

const Stack = createNativeStackNavigator<HistoryStackParamList>();

export const HistoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} />
    </Stack.Navigator>
  );
};
