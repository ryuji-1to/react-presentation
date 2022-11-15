import { useCallback, useEffect, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';
import { Center } from '../components/Center';
import { Section } from '../components/Section';
import { SelfIntroduction } from '../components/slides/SelfIntroduction';
import { useKey } from 'rooks';

const slideState = atom({
  key: 'slideCount',
  default: 0
});

export const useSlides = () => {
  const [count, setCount] = useRecoilState(slideState);

  const allSlides = useMemo(() => {
    return [
      <SelfIntroduction />,
      <Center>
        <Section>
          <h1>Slide 2</h1>
        </Section>
      </Center>,
      <Center>
        <Section>
          <h1>Slide 3</h1>
        </Section>
      </Center>
    ];
  }, [count]);

  const currentSlide = allSlides[count];

  const nextSlide = useCallback(() => {
    setCount((c) => Math.min(allSlides.length - 1, c + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCount((c) => Math.max(0, c - 1));
  }, []);

  const setSlide = useCallback((count: number) => {
    setCount(count);
  }, []);

  useKey(['Enter'], nextSlide);
  useKey(['h'], prevSlide);

  return {
    count,
    allSlides,
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide
  };
};
