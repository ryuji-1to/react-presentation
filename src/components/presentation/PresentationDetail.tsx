import { ReactNode } from 'react';
import { PresentationFooter } from './PresentationFooter';
import { PresentationHeader } from './PresentationHeader';

type Props = {
  children: ReactNode;
};
export const PresentationDetail = ({ children }: Props) => {
  return (
    <main className="flex flex-col h-screen overflow-scroll">
      <PresentationHeader />
      {children}
      <PresentationFooter />
    </main>
  );
};
