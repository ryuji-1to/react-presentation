import { useMemo } from 'react';
import { Example } from '../components/slides/Example';

export function useSlides() {
  const createSlides = (slides: React.ReactElement[]) => {
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
