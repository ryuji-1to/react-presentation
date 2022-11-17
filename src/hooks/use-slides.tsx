import { FC, ReactElement, useMemo } from 'react';
import { Center } from '../components/template/Center';
import { Section } from '../components/template/Section';
import { SelfIntroduction } from '../components/slides/SelfIntroduction';
import { Title } from '../components/slides/Title';

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
      <Center>
        <Section>
          <h1>Slide 1</h1>
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
  }, []);
  return { slides: slides.map((slide) => createSlide(slide)) };
};
