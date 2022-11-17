import { ReactNode } from 'react';
import { PresentationFooter } from './PresentationFooter';
import { PresentationHeader } from './PresentationHeader';

type Props = {
  children: ReactNode;
};
export const PresentationSlide = ({ children }: Props) => {
  return (
    <main className="flex flex-col h-screen max-w-6xl mx-auto">
      <PresentationHeader />
      <div className="flex-1 px-4 pt-1">
        <div className="h-full p-4 bg-white bg-opacity-50 shadow-2xl rounded-2xl backdrop-blur-xl">{children}</div>
      </div>
      <PresentationFooter />
    </main>
  );
};
