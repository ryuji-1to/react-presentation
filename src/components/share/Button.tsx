import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';
type Props = {
  icon?: ReactElement;
  children?: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export function Button({ icon, children, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`${
        icon ? 'p-2 rounded-full backdrop-blur-3xl bg-opacity-70 hover:bg-opacity-20 bg-gray-50 shadow-xl' : ''
      } ${className}`}>
      {icon || children}
    </button>
  );
}
