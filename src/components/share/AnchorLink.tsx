import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Props = { children: ReactNode } & ComponentPropsWithoutRef<'a'>;
export const AnchorLink = ({ children, className, target = '_blank', rel = 'noreferrer', ...rest }: Props) => {
  return (
    <a {...rest} className={`text-sky-500 font-bold hover:underline ${className}`} target={target} rel={rel}>
      {children}
    </a>
  );
};
