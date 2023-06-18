import { useKey } from '../../hooks/use-key';
import { usePresentation } from '../../hooks/use-presentation';
import { Center } from './Center';
import { FadeIn } from './FadeIn';
import { Prose } from './Prose';

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
    <h1 {...rest} className={`text-4.5 font-bold text-gray-800 outline-none ${className}`}>
      {children}
    </h1>
  );
}

function List({ itemList, className }: { itemList?: React.ReactNode[]; className?: string }) {
  return (
    <ul className={className}>
      {itemList?.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

type ConditionalProps =
  | {
      children: React.ReactNode | ((elements: { List: typeof List }) => React.ReactNode);
      renderContent?: never;
    }
  | {
      children?: never;
      renderContent: (elements: { List: typeof List }) => React.ReactNode;
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
  animation,
  position,
  prose,
  slideTitle,
  resetKeyEvent,
  renderContent,
  ...rest
}: Props) {
  const { nextSlide, prevSlide } = usePresentation();
  useKey(['Enter', 'l'], nextSlide, resetKeyEvent);
  useKey(['h'], prevSlide, resetKeyEvent);

  const Position = getPosition(position);
  const Animation = getAnimation(animation);

  let element = (
    <div {...rest}>
      {slideTitle && <Heading contentEditable>{slideTitle}</Heading>}
      {renderContent?.({ List })}
      {typeof children === 'function' ? children({ List }) : children}
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
      <div className="w-[85vw] aspect-video p-20 bg-white/50 shadow-2xl rounded-2xl backdrop-blur-3xl border-2 border-white">
        {element}
      </div>
    </div>
  );
}
