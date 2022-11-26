import { ReactNode, useCallback, useState } from 'react';
import { SlidePanel } from './SlidePanel';
import { useKey } from '../../hooks/use-key';
import { PresentationDetail } from './PresentationDetail';

type Props = {
  children: ReactNode;
};

export const Presentation = ({ children }: Props) => {
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
    <PresentationDetail>
      <SlidePanel isOpen={isOpen} onClose={handleClose} />
      {children}
    </PresentationDetail>
  );
};
