import { Center } from '../template/Center';
import { FadeIn } from '../template/FadeIn';
import { Section } from '../template/Section';

export const SelfIntroduction = () => {
  return (
    <Center>
      <FadeIn>
        <Section>
          <h1 className="font-bold">Self-Introduction</h1>
          <ul className="list-disc">
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </Section>
      </FadeIn>
    </Center>
  );
};
