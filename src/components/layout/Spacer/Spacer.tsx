import { forwardRef, HTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps } from '../../../types';
import './Spacer.css';

export interface SpacerProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16' | '20' | '24';
}

export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  (
    {
      size = '4',
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-spacer',
      `dl-spacer--${size}`,
      className
    );

    return (
      <div ref={ref} className={classes} data-testid={testId} {...props} />
    );
  }
);

Spacer.displayName = 'Spacer';

