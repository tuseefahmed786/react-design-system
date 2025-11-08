import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size } from '../../../types';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  value?: string;
}

export interface BreadcrumbProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  size?: Size;
}

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      items,
      separator = '/',
      size = 'md',
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-breadcrumb',
      `dl-breadcrumb--${size}`,
      className
    );

    return (
      <nav 
        ref={ref} 
        className={classes} 
        aria-label="Breadcrumb" 
        data-testid={testId} 
        {...props}
      >
        <ol className="dl-breadcrumb__list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const key = item.value || `breadcrumb-${index}`;

            return (
              <li key={key} className="dl-breadcrumb__item">
                {item.href ? (
                  <a
                    href={item.href}
                    className={classNames('dl-breadcrumb__link', {
                      'dl-breadcrumb__link--active': isLast,
                      'dl-breadcrumb__link--disabled': item.disabled,
                    })}
                    aria-current={isLast ? 'page' : undefined}
                    aria-disabled={item.disabled}
                    onClick={(e) => {
                      if (item.disabled) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {item.icon && <span className="dl-breadcrumb__icon">{item.icon}</span>}
                    {item.label}
                  </a>
                ) : item.onClick ? (
                  <button
                    type="button"
                    className={classNames('dl-breadcrumb__button', {
                      'dl-breadcrumb__button--active': isLast,
                      'dl-breadcrumb__button--disabled': item.disabled,
                    })}
                    onClick={item.disabled ? undefined : item.onClick}
                    disabled={item.disabled}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.icon && <span className="dl-breadcrumb__icon">{item.icon}</span>}
                    {item.label}
                  </button>
                ) : (
                  <span
                    className={classNames('dl-breadcrumb__text', {
                      'dl-breadcrumb__text--active': isLast,
                      'dl-breadcrumb__text--disabled': item.disabled,
                    })}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.icon && <span className="dl-breadcrumb__icon">{item.icon}</span>}
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <span 
                    className="dl-breadcrumb__separator" 
                    aria-hidden="true"
                  >
                    {separator}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';
