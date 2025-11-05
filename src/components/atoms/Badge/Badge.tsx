import { forwardRef, HTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size, Variant } from '../../../types';
import './Badge.css';

export interface BadgeProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLSpanElement>, 'className' | 'style'> {
  variant?: Variant;
  size?: Size;
  rounded?: boolean;
  outlined?: boolean;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      rounded = false,
      outlined = false,
      children,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-badge',
      `dl-badge--${variant}`,
      `dl-badge--${size}`,
      {
        'dl-badge--rounded': rounded,
        'dl-badge--outlined': outlined,
      },
      className
    );

    return (
      <span ref={ref} className={classes} data-testid={testId} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

