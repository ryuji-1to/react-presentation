import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';
import { Slide } from '../App';

export const slideState = atom({
  key: 'slideCount',
  default: 0
});

export function usePresentation(slides: Slide[]) {
  const [currentIndex, setCurrentIndex] = useRecoilState(slideState);

  const currentSlide = slides[currentIndex]?.slide;

  const nextSlide = useCallback(() => {
    setCurrentIndex((c) => Math.min(slides.length - 1, c + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((c) => Math.max(0, c - 1));
  }, []);

  const setSlide = useCallback((count: number) => {
    setCurrentIndex(count);
  }, []);

  return {
    currentIndex,
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide
  };
}
