export const colors = {
  // ── Surfaces ──
  canvas:          '#000000',   // True black — the only background
  surfaceSoft:     '#0d0d0d',   // Subtle elevation (spec cells, input bg)
  surfaceCard:     '#1a1a1a',   // Cards, modals
  surfaceElevated: '#262626',   // Nested cards, active states
  carbonGray:      '#2b2b2b',   // Tech-spec cards

  // ── Text ──
  onDark:          '#ffffff',   // Headlines, primary text
  body:            '#bbbbbb',   // Body paragraphs
  bodyStrong:      '#e6e6e6',   // Emphasized body
  muted:           '#7e7e7e',   // Captions, inactive tabs

  // ── Borders ──
  hairline:        '#3c3c3c',   // 1px dividers & card borders
  hairlineStrong:  '#262626',   // Subtle borders

  // ── M Tricolor (brand accent ONLY) ──
  mBlueLight:      '#0066b1',   // Stripe stop 1
  mBlueDark:       '#1c69d4',   // Stripe stop 2
  mRed:            '#e22718',   // Stripe stop 3

  // ── Semantic ──
  success:         '#0fa336',
  warning:         '#f4b400',
  danger:          '#e22718',
} as const;
