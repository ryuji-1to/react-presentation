import { ReactNode, useCallback, useState } from 'react';
import { usePresentation } from '../hooks/use-presentation';
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiOutlineX, HiClipboard } from 'react-icons/hi';
import { useSlides } from '../hooks/use-slides';

type Props = {
  children: ReactNode;
};

export const Presentation = (props: Props) => {
  const { nextSlide, prevSlide, setSlide, count } = usePresentation();
  const { slides } = useSlides();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <main className="relative h-screen bg-gray-800 text-white flex">
      {isOpen ? (
        <div className="bg-gray-700 w-40">
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
      ) : (
        <button className="absolute top-4 left-4 z-10" onClick={handleOpen}>
          <HiClipboard className="text-xl" />
        </button>
      )}
      <div className="relative flex-1 h-full flex flex-col">
        {props.children}
        <footer className="absolutebottom-0 left-0 w-full flex justify-around p-6">
          <button onClick={prevSlide}>
            <HiArrowNarrowLeft className="text-xl" />
          </button>
          <span>{count + 1 + ' / ' + slides.length}</span>
          <button onClick={nextSlide}>
            <HiArrowNarrowRight className="text-xl" />
          </button>
        </footer>
      </div>
    </main>
  );
};
