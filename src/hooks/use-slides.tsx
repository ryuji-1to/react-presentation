import { useMemo } from 'react';
import type { ReactElement } from 'react';
import { WhatIsTrpc } from '../components/slides/WhatIsTrpc';
import { PresenTitle } from '../components/slides/PresenTitle';
import { Rpc } from '../components/slides/Rpc';
import { Demo } from '../components/slides/Demo';

export const useSlides = () => {
  const createSlides = (slides: ReactElement[]) => {
    return slides.map((slide) => ({
      slide,
      // @ts-ignore
      text: slide.type.name
    }));
  };

  const slides = useMemo(() => {
    return createSlides([
      <PresenTitle key="presen-title" />,
      <WhatIsTrpc key="what is trpc" />,
      <Rpc key="rpc" />,
      <Demo key="demo" />
    ]);
  }, []);

  return { slides };
};
