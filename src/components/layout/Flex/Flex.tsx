import { forwardRef, HTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps } from '../../../types';
import './Flex.css';

export interface FlexProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = 'row',
      align = 'stretch',
      justify = 'start',
      wrap = 'nowrap',
      gap = '0',
      children,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-flex',
      `dl-flex--direction-${direction}`,
      `dl-flex--align-${align}`,
      `dl-flex--justify-${justify}`,
      `dl-flex--wrap-${wrap}`,
      `dl-flex--gap-${gap}`,
      className
    );

    return (
      <div ref={ref} className={classes} data-testid={testId} {...props}>
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';

