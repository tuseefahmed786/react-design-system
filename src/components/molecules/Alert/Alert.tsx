import { forwardRef, HTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Variant } from '../../../types';
import './Alert.css';

export interface AlertProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  variant?: Variant;
  title?: string;
  closable?: boolean;
  onClose?: () => void;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      title,
      closable = false,
      onClose,
      children,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-alert',
      `dl-alert--${variant}`,
      className
    );

    return (
      <div ref={ref} className={classes} role="alert" data-testid={testId} {...props}>
        <div className="dl-alert__content">
          {title && <div className="dl-alert__title">{title}</div>}
          {children && <div className="dl-alert__description">{children}</div>}
        </div>
        {closable && (
          <button
            className="dl-alert__close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

