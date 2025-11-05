import { forwardRef, ReactNode, useState, HTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps } from '../../../types';
import './Tooltip.css';

export interface TooltipProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style' | 'content'> {
  content: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      placement = 'top',
      delay = 200,
      children,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);
    let timeoutId: NodeJS.Timeout;

    const showTooltip = () => {
      timeoutId = setTimeout(() => setVisible(true), delay);
    };

    const hideTooltip = () => {
      clearTimeout(timeoutId);
      setVisible(false);
    };

    const classes = classNames(
      'dl-tooltip',
      className
    );

    const tooltipClasses = classNames(
      'dl-tooltip__content',
      `dl-tooltip__content--${placement}`,
      {
        'dl-tooltip__content--visible': visible,
      }
    );

    return (
      <div
        ref={ref}
        className={classes}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        data-testid={testId}
        {...props}
      >
        {children}
        <div className={tooltipClasses} role="tooltip">
          {content}
          <div className="dl-tooltip__arrow" />
        </div>
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

