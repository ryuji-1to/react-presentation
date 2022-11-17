import { ReactNode } from 'react';
import { useAnimation } from '../../hooks/use-animation';

type Props = {
  children: ReactNode;
};

export const FadeIn = ({ children }: Props) => {
  const { fadeIn } = useAnimation();
  fadeIn();

  return <div className="fadeIn">{children}</div>;
};
