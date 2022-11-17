import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const Section = (props: Props) => {
  return <section className="prose-lg">{props.children}</section>;
};
