import { useMemo } from 'react';
import type { ReactElement } from 'react';
import { Example } from '../components/slides/Example';

export function useSlides() {
  const createSlides = (slides: ReactElement[]) => {
    return slides.map((slide) => ({
      slide,
      // @ts-ignore
      text: slide.type.name
    }));
  };

  const slides = useMemo(() => {
    return createSlides([<Example key="example" />]);
  }, []);

  return { slides };
}
