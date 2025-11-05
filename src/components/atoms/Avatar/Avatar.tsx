import { forwardRef, ImgHTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import { BaseComponentProps, Size } from '../../../types';
import './Avatar.css';

export interface AvatarProps
  extends BaseComponentProps,
    Omit<ImgHTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  size?: Size;
  src?: string;
  alt?: string;
  name?: string;
  rounded?: boolean;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      size = 'md',
      src,
      alt,
      name,
      rounded = true,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'dl-avatar',
      `dl-avatar--${size}`,
      {
        'dl-avatar--rounded': rounded,
      },
      className
    );

    const getInitials = (name: string) => {
      const names = name.split(' ');
      if (names.length >= 2) {
        return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    };

    return (
      <div ref={ref} className={classes} data-testid={testId} {...props}>
        {src ? (
          <img src={src} alt={alt || name || 'Avatar'} className="dl-avatar__image" />
        ) : name ? (
          <span className="dl-avatar__initials">{getInitials(name)}</span>
        ) : (
          <span className="dl-avatar__placeholder">?</span>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

