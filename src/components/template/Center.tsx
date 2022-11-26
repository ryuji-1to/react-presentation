import type { ReactNode, ComponentPropsWithoutRef } from 'react';
type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export const Center = ({ children, className, ...rest }: Props) => {
  return (
    <div {...rest} className={`grid w-full h-full place-items-center ${className}`}>
      {children}
    </div>
  );
};
