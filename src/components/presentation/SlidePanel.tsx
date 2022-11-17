import { HiOutlineX } from 'react-icons/hi';
import { usePresentation } from '../../hooks/use-presentation';
import { useSlides } from '../../hooks/use-slides';
import { Button } from '../Button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SlidePanel = ({ isOpen, onClose }: Props) => {
  const { count, setSlide } = usePresentation();
  const { slides } = useSlides();

  return (
    <div
      className={`h-screen absolute top-0 left-0 z-10 bg-gray-700 bg-opacity-90 backdrop-blur-sm transition w-56 duration-300 rounded-tr-lg shadow-2xl p-3 overflow-auto  ${
        isOpen ? 'translate-x-0' : '-translate-x-56 opacity-0'
      }`}
    >
      <header className="flex justify-end">
        <Button icon={<HiOutlineX className="text-gray-900" />} onClick={onClose} />
      </header>
      <div className="space-y-4">
        {slides.map((slide, i) => (
          <div className="flex flex-col justify-center items-center w-full">
            <Button onClick={() => setSlide(i)} className="w-full">
              <span className={`${i === count ? 'text-red-400' : 'text-gray-300'} font-bold mb-1 inline-block`}>
                {i + 1}
              </span>
              <div
                className={`text-gray-500 text-xl w-full h-32 rounded-lg p-2 grid items-center text-center bg-white bg-opacity-90 shadow-lg ${
                  i === count ? 'outline outline-red-300' : ''
                }`}
              >{`${slide.text}`}</div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
