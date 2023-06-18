import { SlidePanel } from './SlidePanel';
import { PresentationDetail } from './PresentationDetail';
import { usePresentation } from '../../hooks/use-presentation';

export function Presentation() {
  const { currentSlide } = usePresentation();
  return (
    <PresentationDetail>
      <SlidePanel />
      {currentSlide}
    </PresentationDetail>
  );
}
