import { useCallback, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';
import { Center } from '../components/Center';
import { Section } from '../components/Section';

const slideState = atom({
  key: 'slideCount',
  default: 0
});

export const useSlides = () => {
  const [count, setCount] = useRecoilState(slideState);

  const allSlides = useMemo(() => {
    return [
      <Center>
        <Section>
          <h1 className="font-bold">Self-Introduction</h1>
          <ul className="list-disc">
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </Section>
      </Center>,
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

  const nextSlide = () => {
    setCount((c) => Math.min(allSlides.length - 1, c + 1));
  };

  const prevSlide = () => {
    setCount((c) => Math.max(0, c - 1));
  };

  const setSlide = (count: number) => {
    setCount(count);
  };

  return {
    count,
    allSlides,
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide
  };
};
