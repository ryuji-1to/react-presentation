import { FC, ReactElement, useMemo } from 'react';
import { Center } from '../components/template/Center';
import { SelfIntroduction } from '../components/slides/SelfIntroduction';
import { Title } from '../components/slides/Title';
import { Prose } from '../components/template/Prose';
import { Optimistic } from '../components/slides/ux/Optimistic';

export const useSlides = () => {
  const createSlide = (slide: ReactElement) => {
    return {
      slide,
      // @ts-ignore
      text: slide.type.name
    };
  };

  const slides = useMemo(() => {
    return [
      <Title />,
      <SelfIntroduction />,
      <Optimistic />,
      <Center>
        <Prose>
          <h1>Slide 1</h1>
        </Prose>
      </Center>,
      <Center>
        <Prose>
          <h1>Slide 2</h1>
        </Prose>
      </Center>,
      <Center>
        <Prose>
          <h1>Slide 3</h1>
        </Prose>
      </Center>
    ];
  }, []);
  return { slides: slides.map((slide) => createSlide(slide)) };
};
