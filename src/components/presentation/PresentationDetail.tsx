import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const PresentationDetail = ({ children }: Props) => {
  return <div className="bg-gradient-to-br via-purple-100 from-blue-200 to-blue-200">{children}</div>;
};
