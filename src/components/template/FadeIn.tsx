import { useAnimation } from '../../hooks/use-animation';

type Props = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

export function FadeIn({ children, className, ...rest }: Props) {
  useAnimation().fadeIn();

  return (
    <div {...rest} className={`fadeIn ${className}`}>
      {children}
    </div>
  );
}
