import { forwardRef, ButtonHTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size, Variant } from '../../../types';
import './Button.css';

export interface ButtonProps
  extends BaseComponentProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'style'> {
  variant?: Variant | 'ghost' | 'outline';
  size?: Size;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-button',
      `dl-button--${variant}`,
      `dl-button--${size}`,
      {
        'dl-button--full-width': fullWidth,
        'dl-button--loading': isLoading,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        data-testid={testId}
        {...props}
      >
        {isLoading && <span className="dl-button__spinner" />}
        {!isLoading && leftIcon && <span className="dl-button__icon-left">{leftIcon}</span>}
        {children && <span className="dl-button__content">{children}</span>}
        {!isLoading && rightIcon && <span className="dl-button__icon-right">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

