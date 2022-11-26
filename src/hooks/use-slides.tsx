import { useMemo } from 'react';
import type { ReactElement } from 'react';
import { ColorPrincipal } from '../components/slides/ColorPrincipal';

export const useSlides = () => {
  const createSlide = (slide: ReactElement) => {
    return {
      slide,
      // @ts-ignore
      text: slide.type.name
    };
  };

  const slides = useMemo(() => {
    return [<ColorPrincipal />];
  }, []);
  return { slides: slides.map((slide) => createSlide(slide)) };
};
