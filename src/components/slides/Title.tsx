import { Slide } from '../template/Slide';

export const Title = () => {
  return (
    <Slide positon="center" prose>
      <h1 className="font-bold leading-normal text-center text-gray-700">
        エンジニアも
        <br />
        知っておきたい UI デザイン
      </h1>
    </Slide>
  );
};
