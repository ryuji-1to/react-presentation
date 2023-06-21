import { HiOutlineX } from 'react-icons/hi';
import { usePresentation } from '../../hooks/use-presentation';
import { Button } from '../share/Button';
import { useReducer } from 'react';
import { useKey } from '../../hooks/use-key';
import { Slide } from '../../App';

type Props = {
  slides: Slide[];
};

export function SlidePanel({ slides }: Props) {
  const { currentIndex, setSlide } = usePresentation(slides);
  const [isOpen, handleToggle] = useReducer((isOpen: boolean) => !isOpen, false);

  useKey(['o'], handleToggle);

  return (
    <div
      className={`h-screen absolute top-0 left-0 z-10 bg-gray-700 bg-opacity-90 backdrop-blur-sm transition w-56 duration-300 shadow-2xl p-3 overflow-auto  ${
        isOpen ? 'translate-x-0' : '-translate-x-56 opacity-0'
      }`}>
      <header className="flex justify-end">
        <Button icon={<HiOutlineX className="text-gray-900" />} onClick={handleToggle} />
      </header>
      <div className="space-y-4">
        {slides.map((slide, i) => (
          <div key={i} className="flex flex-col items-center justify-center w-full">
            <Button onClick={() => setSlide(i)} className="w-full">
              <span className={`${i === currentIndex ? 'text-red-400' : 'text-gray-300'} font-bold mb-1 inline-block`}>
                {i + 1}
              </span>
              <div
                className={`text-gray-500 text-xl h-32 rounded-lg p-1 flex justify-center items-center bg-white bg-opacity-90 shadow-lg font-bold ${
                  i === currentIndex ? 'outline outline-red-300' : ''
                }`}>
                <span className="line-clamp-2 break-words">{slide.title}</span>
              </div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
