import { ReactNode, useCallback, useState } from 'react';
import { usePresentation } from '../hooks/use-presentation';
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiOutlineX, HiClipboard } from 'react-icons/hi';
import { useSlides } from '../hooks/use-slides';
import { useClock } from '../hooks/use-clock';

type Props = {
  children: ReactNode;
};

export const Presentation = (props: Props) => {
  const { slides } = useSlides();
  const { nextSlide, prevSlide, setSlide, count } = usePresentation();
  const { Clock } = useClock();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const height = 'h-12';

  return (
    <main className="relative h-screen bg-gray-800 text-white flex flex-col">
      <header className={`${height} flex items-center p-4 justify-between`}>
        <button onClick={handleOpen}>
          <HiClipboard className="text-xl text-gray-300" />
        </button>
        <Clock size="sm" />
      </header>
      <div
        className={`absolute top-0 left-0 h-full z-10 bg-gray-700  transition w-40 duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-40'
        }`}
      >
        <header className="flex justify-end p-2">
          <button onClick={handleClose} className="bg-gray-400 w-6 h-6 rounded-full flex items-center justify-center">
            <HiOutlineX className="text-gray-900" />
          </button>
        </header>
        <div className="space-y-2">
          {slides.map((slide, i) => (
            <div className="flex justify-center">
              <button
                className={`${i === count ? 'text-red-400' : 'text-gray-300'} text-lg font-bold`}
                onClick={() => setSlide(i)}
              >
                slide {i + 1}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-1 p-4`}>{props.children}</div>
      <footer className={`w-full ${height} flex justify-center items-center`}>
        <small className="text-gray-300">{count + 1 + ' / ' + slides.length}</small>
      </footer>
    </main>
  );
};
