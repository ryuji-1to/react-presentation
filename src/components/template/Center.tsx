import { ReactNode } from 'react';

export const Center = (props: { children: ReactNode }) => {
  return <div className="h-full grid place-items-center w-full">{props.children}</div>;
};
