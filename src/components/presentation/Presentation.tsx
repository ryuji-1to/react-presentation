import { MDXProvider } from '@mdx-js/react';
import { SlidePanel } from './SlidePanel';
import { PresentationDetail } from './PresentationDetail';
import { usePresentation } from '../../hooks/use-presentation';
import { PresentationHeader } from './PresentationHeader';
import { PresentationFooter } from './PresentationFooter';
import { useKey } from '../../hooks/use-key';
import { BackGround } from '../../BackGround';
import type { Slides } from '../../types';

type Key = KeyboardEvent['key'];

type Props = {
  slides: Slides;
  showClock?: boolean;
  nextKey?: [Key, ...Key[]];
  previousKey?: [Key, ...Key[]];
};
export function Presentation({
  slides,
  showClock = false,
  nextKey = ['ArrowRight', 'Enter'],
  previousKey = ['ArrowLeft']
}: Props) {
  const { currentSlide, currentIndex, nextSlide, prevSlide } =
    usePresentation(slides);

  useKey(nextKey, nextSlide);
  useKey(previousKey, prevSlide);

  return (
    <BackGround>
      <PresentationDetail>
        <SlidePanel slides={slides} />
        <PresentationHeader showClock={showClock} />
        <MDXProvider>{currentSlide}</MDXProvider>
        <PresentationFooter
          allSlidesCount={slides.length}
          currentIndex={currentIndex}
        />
      </PresentationDetail>
    </BackGround>
  );
}
