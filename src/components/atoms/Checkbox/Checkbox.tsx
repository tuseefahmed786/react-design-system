import { forwardRef, InputHTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size } from '../../../types';
import './Checkbox.css';

export interface CheckboxProps
  extends BaseComponentProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'className' | 'style'> {
  size?: Size;
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'md',
      label,
      indeterminate = false,
      className,
      disabled,
      testId,
      ...props
    },
    ref
  ) => {
    const wrapperClasses = classNames(
      'dl-checkbox-wrapper',
      {
        'dl-checkbox-wrapper--disabled': disabled,
      }
    );

    const inputClasses = classNames(
      'dl-checkbox',
      `dl-checkbox--${size}`,
      {
        'dl-checkbox--indeterminate': indeterminate,
      },
      className
    );

    return (
      <label className={wrapperClasses}>
        <input
          ref={ref}
          type="checkbox"
          className={inputClasses}
          disabled={disabled}
          data-testid={testId}
          {...props}
        />
        {label && <span className={`dl-checkbox__label dl-checkbox__label--${size}`}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

