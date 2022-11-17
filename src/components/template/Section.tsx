import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const Section = (props: Props) => {
  return <div className="prose-lg">{props.children}</div>;
};
