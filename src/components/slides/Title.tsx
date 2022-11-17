import { Center } from '../template/Center';
import { Section } from '../template/Section';

export const Title = () => {
  return (
    <Center>
      <Section>
        <h1 className="font-bold text-center text-gray-700 leading-normal">
          エンジニアも
          <br />
          知っておきたい UI デザイン
        </h1>
      </Section>
    </Center>
  );
};
