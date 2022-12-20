import type { ReactNode, ComponentPropsWithoutRef } from 'react';

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export const Prose = ({ children, className, ...rest }: Props) => {
  return (
    <div {...rest} className={`prose-lg h-full ${className || ''}`}>
      {children}
    </div>
  );
};
