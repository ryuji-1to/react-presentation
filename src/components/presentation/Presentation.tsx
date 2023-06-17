import { SlidePanel } from './SlidePanel';
import { PresentationDetail } from './PresentationDetail';

type Props = {
  children: React.ReactNode;
};

export function Presentation({ children }: Props) {
  return (
    <PresentationDetail>
      <SlidePanel />
      {children}
    </PresentationDetail>
  );
}
