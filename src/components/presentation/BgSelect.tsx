import { useState, useRef } from 'react';
import { TfiPalette } from 'react-icons/tfi';
import { useBg, bgList } from '../../hooks/use-bg';
import { useClickOutside } from '../../hooks/util/use-clickOutside';
import { Button } from '../share/Button';

export function BgSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative">
      <Button icon={<TfiPalette />} onClick={handleOpen} />
      {isOpen && <SelectBg onClose={handleClose} />}
    </div>
  );
}

function SelectBg(props: { onClose: () => void }) {
  const ref = useRef<HTMLUListElement>(null);
  const { bgType, setBgType } = useBg();

  useClickOutside(ref, props.onClose);

  return (
    <ul
      ref={ref}
      className="absolute top-10 right-0 bg-white p-2 z-10 rounded-md drop-shadow-lg">
      {bgList.map((bg) => (
        <li
          key={bg}
          className="w-full flex items-center rounded-sm hover:bg-gray-100">
          <button
            className={`text-left py-1 px-2 rounded-sm ${
              bgType === bg ? 'font-bold bg-gray-100' : ''
            } w-full`}
            onClick={() => setBgType(bg)}>
            {bg}
          </button>
        </li>
      ))}
    </ul>
  );
}
