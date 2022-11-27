import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { useKey } from '../../hooks/use-key';
import { usePresentation } from '../../hooks/use-presentation';
import { Center } from './Center';
import { FadeIn } from './FadeIn';
import { Prose } from './Prose';

type Props = {
  children: ReactNode;
  position?: 'center';
  animation?: 'fadeIn';
  prose?: boolean;
  slideTitle?: string;
  resetKeyEvent?: boolean;
} & ComponentPropsWithoutRef<'div'>;

const getPosition = (position: string | undefined) => {
  switch (position) {
    case 'center':
      return Center;
    default: {
      throw Error(`${position} is not position`);
    }
  }
};

const getAnimation = (animation: string | undefined) => {
  switch (animation) {
    case 'fadeIn':
      return FadeIn;
    default: {
      throw Error(`${animation} is not animation`);
    }
  }
};

export const Slide = ({ children, animation, position, prose, slideTitle, resetKeyEvent, ...rest }: Props) => {
  const { nextSlide, prevSlide } = usePresentation();
  if (!resetKeyEvent) {
    useKey(['Enter', 'l'], nextSlide);
    useKey(['h'], prevSlide);
  }
  const Position = getPosition(position);
  const Animation = getAnimation(animation);
  let element = (
    <div id="slide" {...rest}>
      {children}
    </div>
  );

  if (prose) {
    element = <Prose>{element}</Prose>;
  }

  if (Animation) {
    element = <Animation>{element}</Animation>;
  }

  if (Position) {
    element = <Position>{element}</Position>;
  }

  return (
    <div className="flex-1 px-4 pt-1">
      <div className="relative h-full p-4 bg-white bg-opacity-50 shadow-2xl rounded-2xl backdrop-blur-xl">
        {slideTitle && <div className="absolute font-bold text-gray-400 top-4 left-4">{slideTitle}</div>}
        {element}
      </div>
    </div>
  );
};
