import { forwardRef, HTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps } from '../../../types';
import './Grid.css';

export interface GridProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  columns?: number | '1' | '2' | '3' | '4' | '5' | '6' | '12';
  gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
  rowGap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
  columnGap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns = '1',
      gap,
      rowGap,
      columnGap,
      children,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-grid',
      `dl-grid--columns-${columns}`,
      gap && `dl-grid--gap-${gap}`,
      rowGap && `dl-grid--row-gap-${rowGap}`,
      columnGap && `dl-grid--column-gap-${columnGap}`,
      className
    );

    return (
      <div ref={ref} className={classes} data-testid={testId} {...props}>
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

