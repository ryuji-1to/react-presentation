import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';
type Props = {
  icon?: ReactElement;
  children?: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({ icon, children, className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={`${icon ? 'p-2 rounded-full backdrop-blur-3xl bg-opacity-60 bg-white shadow-xl' : ''} ${className}`}
    >
      {icon || children}
    </button>
  );
};
