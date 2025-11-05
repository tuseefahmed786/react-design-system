import { ReactNode, CSSProperties } from 'react';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type ColorScheme = 'light' | 'dark';

export interface BaseComponentProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  id?: string;
  testId?: string;
}

export interface PolymorphicProps<T extends React.ElementType = 'div'> {
  as?: T;
}

export type ResponsiveValue<T> = T | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl', T>>;

