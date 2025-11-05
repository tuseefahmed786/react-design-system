import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps } from '../../../types';
import './Menu.css';

export interface MenuItem {
  label: ReactNode;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface MenuProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  items: MenuItem[];
  orientation?: 'vertical' | 'horizontal';
}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      items,
      orientation = 'vertical',
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-menu',
      `dl-menu--${orientation}`,
      className
    );

    return (
      <div ref={ref} className={classes} role="menu" data-testid={testId} {...props}>
        {items.map((item) => (
          <button
            key={item.value}
            className={classNames('dl-menu__item', {
              'dl-menu__item--disabled': item.disabled,
            })}
            onClick={item.onClick}
            disabled={item.disabled}
            role="menuitem"
          >
            {item.icon && <span className="dl-menu__icon">{item.icon}</span>}
            <span className="dl-menu__label">{item.label}</span>
          </button>
        ))}
      </div>
    );
  }
);

Menu.displayName = 'Menu';

