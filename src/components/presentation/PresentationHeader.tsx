import { BGType, useBg } from '../../hooks/use-bg';
import { Clock } from './Clock';
import { Button } from '../share/Button';
import { TfiPalette } from 'react-icons/tfi';
import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/util/use-clickOutside';

const bgList: BGType[] = ['Default', 'Spring', 'Summer', 'Fall', 'Winter'];

export function PresentationHeader() {
  return (
    <header className={`flex space-x-4 items-center py-2 px-4 justify-end`}>
      <Clock size="sm" />
      <BgSelect />
    </header>
  );
}

function BgSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const ref = useRef<HTMLUListElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  console.log(isOpen);

  useClickOutside(ref, handleClose);

  return (
    <div className="relative">
      <Button icon={<TfiPalette />} onClick={handleToggle} />
      {isOpen && <SelectBg onClose={handleClose} />}
    </div>
  );
}

function SelectBg(props: { onClose: () => void }) {
  const ref = useRef<HTMLUListElement>(null);
  const { bgType, setBgType } = useBg();
  const handleSetBg = (bg: BGType) => {
    setBgType(bg);
    props.onClose();
  };

  useClickOutside(ref, props.onClose);

  return (
    <ul ref={ref} className="absolute top-10 right-0 bg-white p-2 z-10 rounded-md drop-shadow-lg">
      {bgList.map((bg) => (
        <li key={bg} className="flex items-center rounded-sm hover:bg-gray-100">
          <button
            className={`w-full text-left py-1 px-2 rounded-sm ${bgType === bg ? 'font-bold bg-gray-100' : ''}`}
            onClick={() => handleSetBg(bg)}>
            {bg}
          </button>
        </li>
      ))}
    </ul>
  );
}
