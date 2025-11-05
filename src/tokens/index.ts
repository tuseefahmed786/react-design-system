export * from './colors';
export * from './typography';
export * from './spacing';
export * from './shadows';
export * from './breakpoints';

import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { shadows } from './shadows';
import { breakpoints, mediaQueries } from './breakpoints';

export const tokens = {
  colors,
  typography,
  spacing,
  shadows,
  breakpoints,
  mediaQueries,
} as const;

export type DesignTokens = typeof tokens;

