import { useMemo } from 'react';
import { Center } from '../components/Center';
import { Section } from '../components/Section';
import { SelfIntroduction } from '../components/slides/SelfIntroduction';
import { Title } from '../components/slides/Title';

export const useSlides = () => {
  const slides = useMemo(() => {
    return [
      <Title />,
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
  }, []);
  return { slides };
};
