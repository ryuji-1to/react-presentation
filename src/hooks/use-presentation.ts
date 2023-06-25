import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';
import { Slide } from '../App';

const LOCAL_STORAGE_KEY = 'slide-page-number';

function getLocalPageNumber() {
  const state = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!state) {
    return 0;
  }
  return Number.parseInt(state);
}

function setLocalPageNumber(num: number) {
  localStorage.setItem(LOCAL_STORAGE_KEY, String(num));
}

export const slideState = atom({
  key: 'slideCount',
  default: getLocalPageNumber()
});

export function usePresentation(slides: [Slide, ...Slide[]]) {
  const [currentIndex, setCurrentIndex] = useRecoilState(slideState);

  const currentSlide = slides[currentIndex]?.slide || slides[0].slide;

  const nextSlide = useCallback(() => {
    setCurrentIndex((c) => {
      const pageNumber = Math.min(slides.length - 1, c + 1);
      setLocalPageNumber(pageNumber);
      return pageNumber;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((c) => {
      const pageNumber = Math.max(0, c - 1);
      setLocalPageNumber(pageNumber);
      return pageNumber;
    });
  }, []);

  const setSlide = useCallback((num: number) => {
    setCurrentIndex(num);
    setLocalPageNumber(num);
  }, []);

  return {
    currentIndex,
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide
  };
}
