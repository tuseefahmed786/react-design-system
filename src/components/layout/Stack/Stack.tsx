import { forwardRef, HTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps } from '../../../types';
import './Stack.css';

export interface StackProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  spacing?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
  direction?: 'vertical' | 'horizontal';
  divider?: boolean;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      spacing = '4',
      direction = 'vertical',
      divider = false,
      children,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-stack',
      `dl-stack--${direction}`,
      `dl-stack--spacing-${spacing}`,
      {
        'dl-stack--divider': divider,
      },
      className
    );

    return (
      <div ref={ref} className={classes} data-testid={testId} {...props}>
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

