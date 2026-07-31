import React from 'react';

/**
 * Global Stefto Button Component
 *
 * @param {'primary'|'secondary'|'ghost'|'dark'|'white'} variant
 * @param {'sm'|'md'|'lg'|'xl'} size
 * @param {boolean} pill       - fully rounded corners
 * @param {boolean} pulse      - pulsing glow ring animation
 * @param {boolean} disabled
 * @param {boolean} loading
 * @param {string}  as         - 'button' | 'a' | 'div'
 * @param {string}  href       - if as='a'
 * @param {string}  className  - extra classes
 * @param {React.ReactNode} children
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  pulse = false,
  disabled = false,
  loading = false,
  as: Tag = 'button',
  href,
  className = '',
  children,
  onClick,
  type = 'button',
  ...rest
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    pill    ? 'btn-pill'    : '',
    pulse   ? 'btn-pulse'   : '',
    loading ? 'btn-loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const props = {
    className: classes,
    disabled: disabled || loading,
    onClick,
    ...rest,
  };

  if (Tag === 'a') {
    props.href = href;
    props.rel = rest.target === '_blank' ? 'noopener noreferrer' : undefined;
  } else {
    props.type = type;
  }

  return <Tag {...props}>{children}</Tag>;
}
