import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { useKey } from '../../hooks/use-key';
import { usePresentation } from '../../hooks/use-presentation';
import { Center } from './Center';
import { FadeIn } from './FadeIn';
import { Prose } from './Prose';

type Position = 'center';

type Animation = 'fadeIn';

const getPosition = (position?: Position) => {
  switch (position) {
    case 'center':
      return Center;
    default: {
      return null;
    }
  }
};

const getAnimation = (animation?: Animation) => {
  switch (animation) {
    case 'fadeIn':
      return FadeIn;
    default: {
      return null;
    }
  }
};

const Heading = ({ children, className, ...rest }: { children: ReactNode } & ComponentPropsWithoutRef<'h1'>) => {
  return (
    <h1 {...rest} className={`text-4.5 font-bold text-gray-800 ${className}`}>
      {children}
    </h1>
  );
};

type Props = {
  children: ReactNode;
  position?: Position;
  animation?: Animation;
  prose?: boolean;
  slideTitle?: string;
  resetKeyEvent?: boolean;
} & ComponentPropsWithoutRef<'div'>;

export const Slide = ({ children, animation, position, prose, slideTitle, resetKeyEvent, ...rest }: Props) => {
  const { nextSlide, prevSlide } = usePresentation();
  useKey(['Enter', 'l'], nextSlide, resetKeyEvent);
  useKey(['h'], prevSlide, resetKeyEvent);

  const Position = getPosition(position);
  const Animation = getAnimation(animation);

  let element = (
    <div {...rest}>
      {slideTitle && <Heading>{slideTitle}</Heading>}
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
    <div className="flex-1 mx-auto flex items-center">
      <div className="w-[85vw] aspect-video p-20 bg-white/50 shadow-2xl rounded-2xl backdrop-blur-xl border-2 border-white">
        {element}
      </div>
    </div>
  );
};
