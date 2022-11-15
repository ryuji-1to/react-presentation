import { ReactNode } from 'react';

export const Center = (props: { children: ReactNode }) => {
  return <div className="flex-1 bg-whte grid place-items-center">{props.children}</div>;
};
