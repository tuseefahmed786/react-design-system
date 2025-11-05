import { forwardRef, useEffect, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size } from '../../../types';
import './Modal.css';

export interface ModalProps
  extends BaseComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  isOpen: boolean;
  onClose?: () => void;
  size?: Size;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  title?: string;
  footer?: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      size = 'md',
      closeOnOverlayClick = true,
      closeOnEscape = true,
      title,
      footer,
      children,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      if (!isOpen) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && closeOnEscape) {
          onClose?.();
        }
      };

      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      };
    }, [isOpen, closeOnEscape, onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && closeOnOverlayClick) {
        onClose?.();
      }
    };

    const modalClasses = classNames(
      'dl-modal',
      `dl-modal--${size}`,
      className
    );

    const modalContent = (
      <div className="dl-modal-overlay" onClick={handleOverlayClick}>
        <div
          ref={ref}
          className={modalClasses}
          role="dialog"
          aria-modal="true"
          data-testid={testId}
          {...props}
        >
          {title && (
            <div className="dl-modal__header">
              <h2 className="dl-modal__title">{title}</h2>
              {onClose && (
                <button
                  className="dl-modal__close"
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  ×
                </button>
              )}
            </div>
          )}
          <div className="dl-modal__body">{children}</div>
          {footer && <div className="dl-modal__footer">{footer}</div>}
        </div>
      </div>
    );

    return createPortal(modalContent, document.body);
  }
);

Modal.displayName = 'Modal';

