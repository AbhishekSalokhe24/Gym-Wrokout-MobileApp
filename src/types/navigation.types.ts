import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type HistoryStackParamList = {
  History: undefined;
  WorkoutDetail: { workoutId: string };
};

export type MainTabsParamList = {
  Dashboard: undefined;
  Workout: undefined;
  HistoryStack: NavigatorScreenParams<HistoryStackParamList>;
  Analytics: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabsParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
