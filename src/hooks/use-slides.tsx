import { useMemo } from 'react';
import type { ReactElement } from 'react';
import { WhatIsTrpc } from '../components/slides/WhatIsTrpc';
import { PresenTitle } from '../components/slides/PresenTitle';
import { TableOfContents } from '../components/slides/TableOfContents';

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
      <TableOfContents key="Table of contents" />,
      <WhatIsTrpc key="what is trpc" />
    ]);
  }, []);

  return { slides };
};
