import { forwardRef, LabelHTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size } from '../../../types';
import './Label.css';

export interface LabelProps
  extends BaseComponentProps,
    Omit<LabelHTMLAttributes<HTMLLabelElement>, 'className' | 'style'> {
  size?: Size;
  required?: boolean;
  disabled?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      size = 'md',
      required = false,
      disabled = false,
      children,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-label',
      `dl-label--${size}`,
      {
        'dl-label--disabled': disabled,
      },
      className
    );

    return (
      <label ref={ref} className={classes} data-testid={testId} {...props}>
        {children}
        {required && <span className="dl-label__required">*</span>}
      </label>
    );
  }
);

Label.displayName = 'Label';

