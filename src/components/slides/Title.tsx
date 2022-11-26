import { Slide } from '../template/Slide';

export const Title = () => {
  return (
    <Slide position="center" prose>
      <h1 className="font-bold leading-normal text-center text-gray-700">
        エンジニアも知っておきたい
        <br />
        UI/UX デザインの基本
      </h1>
    </Slide>
  );
};
