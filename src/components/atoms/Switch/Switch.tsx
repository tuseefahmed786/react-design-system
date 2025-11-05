import { forwardRef, InputHTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size } from '../../../types';
import './Switch.css';

export interface SwitchProps
  extends BaseComponentProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'className' | 'style'> {
  size?: Size;
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
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
      'dl-switch-wrapper',
      {
        'dl-switch-wrapper--disabled': disabled,
      }
    );

    const containerClasses = classNames(
      'dl-switch',
      `dl-switch--${size}`,
      className
    );

    return (
      <label className={wrapperClasses}>
        <span className={containerClasses}>
          <input
            ref={ref}
            type="checkbox"
            className="dl-switch__input"
            disabled={disabled}
            data-testid={testId}
            {...props}
          />
          <span className="dl-switch__slider" />
        </span>
        {label && <span className={`dl-switch__label dl-switch__label--${size}`}>{label}</span>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

