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
      className={`absolute top-0 left-0 h-full z-10 bg-gray-700 bg-opacity-90 backdrop-blur-sm transition w-52 duration-300 rounded-tr-lg shadow-2xl ${
        isOpen ? 'translate-x-0' : '-translate-x-52 opacity-0'
      }`}
    >
      <header className="flex justify-end p-2">
        <Button icon={<HiOutlineX className="text-gray-900" />} onClick={onClose} />
      </header>
      <div className="space-y-2">
        {slides.map((_slide, i) => (
          <div className="flex flex-col justify-center">
            <Button
              className={`${i === count ? 'text-red-400' : 'text-gray-300'} text-lg font-bold`}
              onClick={() => setSlide(i)}
            >
              slide {i + 1}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
