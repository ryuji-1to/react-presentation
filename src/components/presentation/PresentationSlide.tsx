import { ReactNode } from 'react';
import { PresentationFooter } from './PresentationFooter';
import { PresentationHeader } from './PresentationHeader';

type Props = {
  children: ReactNode;
};
export const PresentationSlide = ({ children }: Props) => {
  return (
    <main className="h-screen flex flex-col max-w-6xl mx-auto">
      <PresentationHeader />
      <div className="flex-1 px-4 pt-1">
        <div className="h-full bg-white rounded-lg backdrop-blur-xl bg-opacity-70 shadow-2xl">{children}</div>
      </div>
      <PresentationFooter />
    </main>
  );
};
