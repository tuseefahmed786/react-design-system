import { forwardRef, HTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps } from '../../../types';
import './Container.css';

export interface ContainerProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  centerContent?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      maxWidth = 'lg',
      centerContent = false,
      children,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-container',
      `dl-container--${maxWidth}`,
      {
        'dl-container--center': centerContent,
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

Container.displayName = 'Container';

