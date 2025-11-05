import { forwardRef, InputHTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size } from '../../../types';
import './Input.css';

export interface InputProps
  extends BaseComponentProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'className' | 'style'> {
  size?: Size;
  error?: boolean;
  helperText?: string;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      error = false,
      helperText,
      leftAddon,
      rightAddon,
      fullWidth = false,
      className,
      disabled,
      testId,
      ...props
    },
    ref
  ) => {
    const wrapperClasses = classNames(
      'dl-input-wrapper',
      {
        'dl-input-wrapper--full-width': fullWidth,
      }
    );

    const containerClasses = classNames(
      'dl-input-container',
      `dl-input-container--${size}`,
      {
        'dl-input-container--error': error,
        'dl-input-container--disabled': disabled,
        'dl-input-container--with-left-addon': leftAddon,
        'dl-input-container--with-right-addon': rightAddon,
      }
    );

    const inputClasses = classNames(
      'dl-input',
      `dl-input--${size}`,
      className
    );

    return (
      <div className={wrapperClasses}>
        <div className={containerClasses}>
          {leftAddon && <span className="dl-input__addon-left">{leftAddon}</span>}
          <input
            ref={ref}
            className={inputClasses}
            disabled={disabled}
            data-testid={testId}
            {...props}
          />
          {rightAddon && <span className="dl-input__addon-right">{rightAddon}</span>}
        </div>
        {helperText && (
          <span className={classNames('dl-input__helper-text', { 'dl-input__helper-text--error': error })}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

