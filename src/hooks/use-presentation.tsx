import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';
import { useSlides } from './use-slides';

const slideState = atom({
  key: 'slideCount',
  default: 0
});

export const usePresentation = () => {
  const [count, setCount] = useRecoilState(slideState);
  const { slides } = useSlides();

  const currentSlide = slides[count].slide;

  const nextSlide = useCallback(() => {
    setCount((c) => Math.min(slides.length - 1, c + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCount((c) => Math.max(0, c - 1));
  }, []);

  const setSlide = useCallback((count: number) => {
    setCount(count);
  }, []);

  return {
    count,
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide
  };
};
