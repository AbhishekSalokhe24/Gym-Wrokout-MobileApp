import { TextStyle } from 'react-native';

export const typography = {
  // ── Display: Inter Bold 700, UPPERCASE ──
  displayXl: {
    fontFamily: 'Inter_700Bold', fontSize: 36, fontWeight: '700' as const,
    letterSpacing: 0, textTransform: 'uppercase' as const, color: '#ffffff',
  },
  displayLg: {
    fontFamily: 'Inter_700Bold', fontSize: 28, fontWeight: '700' as const,
    letterSpacing: 0, textTransform: 'uppercase' as const, color: '#ffffff',
  },
  displayMd: {
    fontFamily: 'Inter_700Bold', fontSize: 22, fontWeight: '700' as const,
    letterSpacing: 0, textTransform: 'uppercase' as const, color: '#ffffff',
  },
  displaySm: {
    fontFamily: 'Inter_700Bold', fontSize: 18, fontWeight: '700' as const,
    letterSpacing: 0, textTransform: 'uppercase' as const, color: '#ffffff',
  },

  // ── Titles: Inter Bold / Regular ──
  titleLg: {
    fontFamily: 'Inter_700Bold', fontSize: 20, fontWeight: '700' as const,
    lineHeight: 26, color: '#ffffff',
  },
  titleMd: {
    fontFamily: 'Inter_300Light', fontSize: 17, fontWeight: '300' as const,
    lineHeight: 24, color: '#e6e6e6',
  },

  // ── Labels: Machined uppercase ──
  labelUpper: {
    fontFamily: 'Inter_700Bold', fontSize: 12, fontWeight: '700' as const,
    letterSpacing: 1.5, textTransform: 'uppercase' as const, color: '#7e7e7e',
  },

  // ── Body: Inter Light 300 ──
  bodyMd: {
    fontFamily: 'Inter_300Light', fontSize: 15, fontWeight: '300' as const,
    lineHeight: 22, color: '#bbbbbb',
  },
  bodySm: {
    fontFamily: 'Inter_300Light', fontSize: 13, fontWeight: '300' as const,
    lineHeight: 20, color: '#bbbbbb',
  },

  // ── Caption ──
  caption: {
    fontFamily: 'Inter_300Light', fontSize: 11, fontWeight: '400' as const,
    letterSpacing: 0.5, color: '#7e7e7e',
  },

  // ── Button: Machined uppercase ──
  button: {
    fontFamily: 'Inter_700Bold', fontSize: 13, fontWeight: '700' as const,
    letterSpacing: 1.5, textTransform: 'uppercase' as const, color: '#ffffff',
  },
} satisfies Record<string, TextStyle>;
