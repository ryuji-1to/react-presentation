import { Center } from './Center';
import { FadeIn } from './FadeIn';
import * as Parts from './parts';

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

function Heading({
  children,
  className,
  ...rest
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<'h1'>) {
  return (
    <h1
      {...rest}
      className={`text-4.5 font-bold text-gray-800 outline-none ${className}`}>
      {children}
    </h1>
  );
}

type ConditionalProps =
  | {
      children: React.ReactNode | ((elements: typeof Parts) => React.ReactNode);
      renderContent?: never;
    }
  | {
      children?: never;
      renderContent: (elements: typeof Parts) => React.ReactNode;
    };

type Props = {
  position?: Position;
  animation?: Animation;
  prose?: boolean;
  slideTitle?: string;
  resetKeyEvent?: boolean;
} & ConditionalProps &
  Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>;

export function Slide({
  children,
  className = '',
  animation,
  position,
  prose = true,
  slideTitle,
  renderContent,
  ...rest
}: Props) {
  const Position = getPosition(position);
  const Animation = getAnimation(animation);

  let element = (
    <div {...rest} className={`${className} ${prose ? 'prose prose-lg' : ''}`}>
      {slideTitle && <Heading>{slideTitle}</Heading>}
      {renderContent?.(Parts)}
      {typeof children === 'function' ? children(Parts) : children}
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
      <div className="w-[85vw] aspect-video p-16 bg-white/50 shadow-2xl rounded-2xl backdrop-blur-3xl border-2 border-white">
        {element}
      </div>
    </div>
  );
}
