import { forwardRef, ReactNode } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps } from '../../../types';
import { Label } from '../../atoms/Label';
import './FormField.css';

export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  children: ReactNode;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      label,
      htmlFor,
      required = false,
      error,
      helperText,
      children,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-form-field',
      {
        'dl-form-field--error': error,
      },
      className
    );

    return (
      <div ref={ref} className={classes} data-testid={testId} {...props}>
        {label && (
          <Label htmlFor={htmlFor} required={required}>
            {label}
          </Label>
        )}
        <div className="dl-form-field__control">{children}</div>
        {(error || helperText) && (
          <div
            className={classNames('dl-form-field__message', {
              'dl-form-field__message--error': error,
            })}
          >
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

