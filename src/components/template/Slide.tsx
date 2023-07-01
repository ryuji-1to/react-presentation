import { Center } from './Center';
import { FadeIn } from './FadeIn';

type Position = 'center';

type Animation = 'fadeIn';

function getPosition(position?: Position) {
  switch (position) {
    case 'center':
      return Center;
    default: {
      return null;
    }
  }
}

function getAnimation(animation?: Animation) {
  switch (animation) {
    case 'fadeIn':
      return FadeIn;
    default: {
      return null;
    }
  }
}

type Props = {
  position?: Position;
  animation?: Animation;
  prose?: boolean;
  resetKeyEvent?: boolean;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>;

export function Slide({
  children,
  className = '',
  animation,
  position,
  prose = true,
  ...rest
}: Props) {
  const Position = getPosition(position);
  const Animation = getAnimation(animation);

  let element = (
    <div
      {...rest}
      className={`${className} ${
        prose
          ? 'prose prose-sm sm:prose-md md:prose-lg lg:prose-xl xl:prose-2xl marker:text-black'
          : ''
      } flex flex-col h-full max-w-full`}>
      {children}
    </div>
  );

  if (Animation) {
    element = <Animation>{element}</Animation>;
  }

  if (Position) {
    element = <Position>{element}</Position>;
  }

  return (
    <div className="flex-1 mx-auto flex items-center">
      <div className="w-[88vw] aspect-video p-[4vw] bg-white/50 shadow-2xl rounded-2xl backdrop-blur-3xl border-2 border-white">
        {element}
      </div>
    </div>
  );
}
