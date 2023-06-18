import { useMemo } from 'react';
import { Example } from '../components/slides/Example';
import { Example2 } from '../components/slides/Example2';

const createSlide = (title: string, slide: React.ReactElement) => {
  return { title, slide };
};

export function useSlides() {
  const slides = useMemo(() => {
    return [createSlide('Example Slide', <Example />), createSlide('Example Slide2', <Example2 />)];
  }, []);

  return { slides };
}
