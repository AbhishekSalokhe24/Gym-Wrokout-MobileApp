import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme';

interface MStripeProps {
  style?: ViewStyle;
}

export const MStripe = ({ style }: MStripeProps) => {
  return (
    <LinearGradient
      colors={[colors.mBlueLight, colors.mBlueDark, colors.mRed]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.stripe, style]}
    />
  );
};

const styles = StyleSheet.create({
  stripe: {
    height: 4,
    width: '100%',
  },
});
