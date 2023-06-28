import { MDXProvider } from '@mdx-js/react';
import { SlidePanel } from './SlidePanel';
import { PresentationDetail } from './PresentationDetail';
import { usePresentation } from '../../hooks/use-presentation';
import type { Slide as TSlide } from '../../App';
import { PresentationHeader } from './PresentationHeader';
import { PresentationFooter } from './PresentationFooter';
import { useKey } from '../../hooks/use-key';
import { BackGround } from '../../BackGround';
import { Slide } from '../template/Slide';

type Props = {
  slides: [TSlide, ...TSlide[]];
  showClock?: boolean;
  nextKey?: KeyboardEvent['key'][];
  previousKey?: KeyboardEvent['key'][];
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
        <MDXProvider>
          <Slide>{currentSlide}</Slide>
        </MDXProvider>
        <PresentationFooter
          allSlidesCount={slides.length}
          currentIndex={currentIndex}
        />
      </PresentationDetail>
    </BackGround>
  );
}
