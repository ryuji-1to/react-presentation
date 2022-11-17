import { usePresentation } from '../../hooks/use-presentation';
import { useSlides } from '../../hooks/use-slides';

export const PresentationFooter = () => {
  const { count } = usePresentation();
  const { slides } = useSlides();
  return (
    <footer className={`w-full flex justify-center py-2 items-center`}>
      <small className="text-gray-900 font-bold">{count + 1 + ' / ' + slides.length}</small>
    </footer>
  );
};
