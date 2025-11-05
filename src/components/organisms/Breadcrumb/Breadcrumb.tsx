import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps } from '../../../types';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  items: BreadcrumbItem[];
  separator?: ReactNode;
}

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      items,
      separator = '/',
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames('dl-breadcrumb', className);

    return (
      <nav ref={ref} className={classes} aria-label="Breadcrumb" data-testid={testId} {...props}>
        <ol className="dl-breadcrumb__list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="dl-breadcrumb__item">
                {item.href ? (
                  <a
                    href={item.href}
                    className={classNames('dl-breadcrumb__link', {
                      'dl-breadcrumb__link--active': isLast,
                    })}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                ) : item.onClick ? (
                  <button
                    className={classNames('dl-breadcrumb__button', {
                      'dl-breadcrumb__button--active': isLast,
                    })}
                    onClick={item.onClick}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                ) : (
                  <span
                    className={classNames('dl-breadcrumb__text', {
                      'dl-breadcrumb__text--active': isLast,
                    })}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <span className="dl-breadcrumb__separator">{separator}</span>
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

