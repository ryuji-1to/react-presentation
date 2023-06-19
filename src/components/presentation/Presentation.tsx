import { SlidePanel } from './SlidePanel';
import { PresentationDetail } from './PresentationDetail';
import { usePresentation } from '../../hooks/use-presentation';
import { Slide } from '../../App';
import { PresentationHeader } from './PresentationHeader';
import { PresentationFooter } from './PresentationFooter';
import { useKey } from '../../hooks/use-key';

export function Presentation({ slides }: { slides: Slide[] }) {
  const { currentSlide, currentIndex, nextSlide, prevSlide } = usePresentation(slides);
  useKey(['ArrowRight'], nextSlide);
  useKey(['ArrowLeft'], prevSlide);

  return (
    <PresentationDetail>
      <SlidePanel slides={slides} />
      <PresentationHeader />
      {currentSlide}
      <PresentationFooter slides={slides} currentIndex={currentIndex} />
    </PresentationDetail>
  );
}
