import { forwardRef, HTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size, Variant } from '../../../types';
import './Spinner.css';

export interface SpinnerProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  size?: Size;
  variant?: Variant;
  label?: string;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      size = 'md',
      variant = 'primary',
      label,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-spinner',
      `dl-spinner--${size}`,
      `dl-spinner--${variant}`,
      className
    );

    return (
      <div ref={ref} className="dl-spinner-wrapper" data-testid={testId} {...props}>
        <div className={classes} role="status" aria-label={label || 'Loading'}>
          <span className="dl-spinner__ring" />
        </div>
        {label && <span className="dl-spinner__label">{label}</span>}
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

