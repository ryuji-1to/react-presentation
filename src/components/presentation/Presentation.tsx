import { SlidePanel } from './SlidePanel';
import { PresentationDetail } from './PresentationDetail';
import { usePresentation } from '../../hooks/use-presentation';
import { Slide } from '../../App';
import { PresentationHeader } from './PresentationHeader';
import { PresentationFooter } from './PresentationFooter';
import { useKey } from '../../hooks/use-key';

type Props = {
  slides: Slide[];
};
export function Presentation({ slides }: Props) {
  const { currentSlide, currentIndex, nextSlide, prevSlide } = usePresentation(slides);

  useKey(['ArrowRight'], nextSlide);
  useKey(['ArrowLeft'], prevSlide);

  return (
    <PresentationDetail>
      <SlidePanel slides={slides} />
      <PresentationHeader />
      {currentSlide}
      <PresentationFooter allSlidesCount={slides.length} currentIndex={currentIndex} />
    </PresentationDetail>
  );
}
