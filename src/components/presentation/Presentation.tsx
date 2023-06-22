import { SlidePanel } from './SlidePanel';
import { PresentationDetail } from './PresentationDetail';
import { usePresentation } from '../../hooks/use-presentation';
import { Slide } from '../../App';
import { PresentationHeader } from './PresentationHeader';
import { PresentationFooter } from './PresentationFooter';
import { useKey } from '../../hooks/use-key';

type Props = {
  slides: Slide[];
  nextKey?: KeyboardEvent['key'][];
  previousKey?: KeyboardEvent['key'][];
};
export function Presentation({ slides, nextKey = ['ArrowRight', 'Enter'], previousKey = ['ArrowLeft'] }: Props) {
  const { currentSlide, currentIndex, nextSlide, prevSlide } = usePresentation(slides);

  useKey(nextKey, nextSlide);
  useKey(previousKey, prevSlide);

  return (
    <PresentationDetail>
      <SlidePanel slides={slides} />
      <PresentationHeader />
      {currentSlide}
      <PresentationFooter allSlidesCount={slides.length} currentIndex={currentIndex} />
    </PresentationDetail>
  );
}
