import { useMemo } from 'react';
import { Example } from '../components/slides/Example';

const createSlide = (title: string, slide: React.ReactElement) => {
  return { title, slide };
};

export function useSlides() {
  const slides = useMemo(() => {
    return [
      createSlide('Example Slide', <Example />),
      createSlide('Example Slide2', <Example />),
      createSlide('Example Slide3', <Example />),
      createSlide('Example Slide4', <Example />),
      createSlide('Example Slide5', <Example />)
    ];
  }, []);

  return { slides };
}
