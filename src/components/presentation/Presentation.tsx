import { ReactNode, useCallback, useState } from 'react';
import { useClock } from '../../hooks/use-clock';
import { PresentationFooter } from './PresentationFooter';
import { SlidePanel } from './SlidePanel';
import { useKey } from '../../hooks/use-key';
import { PresentationHeader } from './PresentationHeader';

type Props = {
  children: ReactNode;
};

export const Presentation = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useKey(['o'], handleOpen);
  useKey(['c'], handleClose);

  return (
    <div className="bg-gradient-to-br from-green-200 to-blue-400">
      <SlidePanel isOpen={isOpen} onClose={handleClose} />
      <main className="h-screen flex flex-col max-w-6xl mx-auto">
        <PresentationHeader />
        <div className="flex-1 px-4 pt-1">
          <div className="h-full bg-white rounded-lg backdrop-blur-lg bg-opacity-70 shadow-2xl">{props.children}</div>
        </div>
        <PresentationFooter />
      </main>
    </div>
  );
};
