import { Slide } from '../../App';

export function PresentationFooter({ currentIndex, slides }: { currentIndex: number; slides: Slide[] }) {
  return (
    <footer className={`w-full flex justify-center py-3 items-center`}>
      <small className="text-gray-900 font-bold">{currentIndex + 1 + ' / ' + slides.length}</small>
    </footer>
  );
}
