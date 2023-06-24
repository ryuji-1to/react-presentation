import { SlidePanel } from './SlidePanel';
import { PresentationDetail } from './PresentationDetail';
import { usePresentation } from '../../hooks/use-presentation';
import { Slide } from '../../App';
import { PresentationHeader } from './PresentationHeader';
import { PresentationFooter } from './PresentationFooter';
import { useKey } from '../../hooks/use-key';
import { Clock } from './Clock';
import { BgSelect } from './BgSelect';

type Props = {
  slides: [Slide, ...Slide[]];
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
  const { currentSlide, currentIndex, nextSlide, prevSlide } = usePresentation(slides);

  useKey(nextKey, nextSlide);
  useKey(previousKey, prevSlide);

  return (
    <PresentationDetail>
      <SlidePanel slides={slides} />
      <PresentationHeader>
        {showClock && <Clock />}
        <BgSelect />
      </PresentationHeader>
      {currentSlide}
      <PresentationFooter allSlidesCount={slides.length} currentIndex={currentIndex} />
    </PresentationDetail>
  );
}
