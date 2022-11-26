import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { useAnimation } from '../../hooks/use-animation';

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export const FadeIn = ({ children, className, ...rest }: Props) => {
  useAnimation().fadeIn();

  return (
    <div {...rest} className={`fadeIn ${className}`}>
      {children}
    </div>
  );
};
