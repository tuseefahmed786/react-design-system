import { forwardRef, HTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps } from '../../../types';
import './Card.css';

export interface CardProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  hoverable?: boolean;
  bordered?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      hoverable = false,
      bordered = true,
      children,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-card',
      {
        'dl-card--hoverable': hoverable,
        'dl-card--bordered': bordered,
      },
      className
    );

    return (
      <div ref={ref} className={classes} data-testid={testId} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, BaseComponentProps & HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={classNames('dl-card__header', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef<HTMLDivElement, BaseComponentProps & HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={classNames('dl-card__body', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

export const CardFooter = forwardRef<HTMLDivElement, BaseComponentProps & HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={classNames('dl-card__footer', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

