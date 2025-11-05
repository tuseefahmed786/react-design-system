import { forwardRef, InputHTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size } from '../../../types';
import './Radio.css';

export interface RadioProps
  extends BaseComponentProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'className' | 'style'> {
  size?: Size;
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = 'md',
      label,
      className,
      disabled,
      testId,
      ...props
    },
    ref
  ) => {
    const wrapperClasses = classNames(
      'dl-radio-wrapper',
      {
        'dl-radio-wrapper--disabled': disabled,
      }
    );

    const inputClasses = classNames(
      'dl-radio',
      `dl-radio--${size}`,
      className
    );

    return (
      <label className={wrapperClasses}>
        <input
          ref={ref}
          type="radio"
          className={inputClasses}
          disabled={disabled}
          data-testid={testId}
          {...props}
        />
        {label && <span className={`dl-radio__label dl-radio__label--${size}`}>{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

