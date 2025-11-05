import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size } from '../../../types';
import { Input } from '../../atoms/Input';
import './SearchBar.css';

export interface SearchBarProps
  extends BaseComponentProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'className' | 'style'> {
  size?: Size;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  clearable?: boolean;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      size = 'md',
      onSearch,
      onClear,
      clearable = true,
      className,
      value: controlledValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState('');
    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSearch) {
        onSearch(value as string);
      }
    };

    const handleClear = () => {
      if (controlledValue === undefined) {
        setInternalValue('');
      }
      onClear?.();
    };

    const searchIcon = (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 14L10.5 10.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

    const clearIcon = clearable && value ? (
      <button
        type="button"
        className="dl-search-bar__clear"
        onClick={handleClear}
        aria-label="Clear search"
      >
        ×
      </button>
    ) : null;

    return (
      <Input
        ref={ref}
        type="search"
        size={size}
        className={classNames('dl-search-bar', className)}
        leftAddon={searchIcon}
        rightAddon={clearIcon}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...props}
      />
    );
  }
);

SearchBar.displayName = 'SearchBar';

