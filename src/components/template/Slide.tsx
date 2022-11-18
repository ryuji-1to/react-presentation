import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Center } from './Center';
import { FadeIn } from './FadeIn';
import { Prose } from './Prose';

type Props = {
  children: ReactNode;
  positon?: 'center';
  animation?: 'fadeIn';
  prose?: boolean;
} & ComponentPropsWithoutRef<'div'>;

const getPositon = (positon: string | undefined) => {
  switch (positon) {
    case 'center':
      return Center;
    default:
      return null;
  }
};

const getAnimation = (animation: string | undefined) => {
  switch (animation) {
    case 'fadeIn':
      return FadeIn;
    default:
      return null;
  }
};

export const Slide = ({ children, animation, positon, prose, ...rest }: Props) => {
  const Positon = getPositon(positon);
  const Animation = getAnimation(animation);
  let element = <div {...rest}>{children}</div>;

  if (prose) {
    element = <Prose>{element}</Prose>;
  }

  if (Animation) {
    element = <Animation>{element}</Animation>;
  }

  if (Positon) {
    element = <Positon>{element}</Positon>;
  }

  return element;
};
