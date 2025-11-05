import { forwardRef, useState, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps } from '../../../types';
import './Accordion.css';

export interface AccordionItem {
  title: ReactNode;
  content: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface AccordionProps extends BaseComponentProps {
  items: AccordionItem[];
  defaultValue?: string[];
  value?: string[];
  onChange?: (value: string[]) => void;
  allowMultiple?: boolean;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items,
      defaultValue = [],
      value: controlledValue,
      onChange,
      allowMultiple = false,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const activeValues = controlledValue !== undefined ? controlledValue : internalValue;

    const handleToggle = (value: string, disabled?: boolean) => {
      if (disabled) return;

      let newValues: string[];

      if (activeValues.includes(value)) {
        newValues = activeValues.filter((v) => v !== value);
      } else {
        newValues = allowMultiple ? [...activeValues, value] : [value];
      }

      if (controlledValue === undefined) {
        setInternalValue(newValues);
      }
      onChange?.(newValues);
    };

    const classes = classNames('dl-accordion', className);

    return (
      <div ref={ref} className={classes} data-testid={testId} {...props}>
        {items.map((item) => {
          const isOpen = activeValues.includes(item.value);
          const itemClasses = classNames('dl-accordion__item', {
            'dl-accordion__item--open': isOpen,
            'dl-accordion__item--disabled': item.disabled,
          });

          return (
            <div key={item.value} className={itemClasses}>
              <button
                className="dl-accordion__header"
                onClick={() => handleToggle(item.value, item.disabled)}
                disabled={item.disabled}
                aria-expanded={isOpen}
              >
                <span className="dl-accordion__title">{item.title}</span>
                <span className="dl-accordion__icon">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="dl-accordion__content">{item.content}</div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';

