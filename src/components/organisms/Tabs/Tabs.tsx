import { forwardRef, useState, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size } from '../../../types';
import './Tabs.css';

export interface TabItem {
  label: ReactNode;
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  size?: Size;
  variant?: 'line' | 'enclosed';
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      defaultValue,
      value: controlledValue,
      onChange,
      size = 'md',
      variant = 'line',
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(
      defaultValue || items[0]?.value || ''
    );

    const activeValue = controlledValue !== undefined ? controlledValue : internalValue;

    const handleTabClick = (value: string, disabled?: boolean) => {
      if (disabled) return;

      if (controlledValue === undefined) {
        setInternalValue(value);
      }
      onChange?.(value);
    };

    const activeTab = items.find((item) => item.value === activeValue);

    const containerClasses = classNames(
      'dl-tabs',
      `dl-tabs--${variant}`,
      className
    );

    const tabListClasses = classNames(
      'dl-tabs__list',
      `dl-tabs__list--${size}`
    );

    return (
      <div ref={ref} className={containerClasses} data-testid={testId} {...props}>
        <div className={tabListClasses} role="tablist">
          {items.map((item) => {
            const isActive = item.value === activeValue;
            const tabClasses = classNames(
              'dl-tabs__tab',
              `dl-tabs__tab--${size}`,
              {
                'dl-tabs__tab--active': isActive,
                'dl-tabs__tab--disabled': item.disabled,
              }
            );

            return (
              <button
                key={item.value}
                className={tabClasses}
                onClick={() => handleTabClick(item.value, item.disabled)}
                disabled={item.disabled}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${item.value}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <div
          className="dl-tabs__panel"
          role="tabpanel"
          id={`panel-${activeValue}`}
        >
          {activeTab?.content}
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

