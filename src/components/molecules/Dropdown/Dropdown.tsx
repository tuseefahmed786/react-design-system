import { forwardRef, useState, useRef, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../../utils';
import { useClickOutside } from '../../../hooks';
import { BaseComponentProps } from '../../../types';
import './Dropdown.css';

export interface DropdownItemProps {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  trigger: ReactNode;
  items: DropdownItemProps[];
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      trigger,
      items,
      placement = 'bottom-start',
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(dropdownRef, () => setIsOpen(false));

    const handleItemClick = (item: DropdownItemProps) => {
      if (!item.disabled) {
        item.onClick?.();
        setIsOpen(false);
      }
    };

    const classes = classNames(
      'dl-dropdown',
      className
    );

    const menuClasses = classNames(
      'dl-dropdown__menu',
      `dl-dropdown__menu--${placement}`,
      {
        'dl-dropdown__menu--open': isOpen,
      }
    );

    return (
      <div ref={dropdownRef} className={classes} data-testid={testId} {...props}>
        <div
          className="dl-dropdown__trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {trigger}
        </div>
        {isOpen && (
          <div className={menuClasses}>
            {items.map((item, index) => (
              <button
                key={`${item.value}-${index}`}
                className={classNames('dl-dropdown__item', {
                  'dl-dropdown__item--disabled': item.disabled,
                })}
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

