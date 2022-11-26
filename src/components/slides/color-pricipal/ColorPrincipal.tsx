import { useState } from 'react';
import { useKey } from '../../../hooks/use-key';
import { usePresentation } from '../../../hooks/use-presentation';
import { Slide } from '../../template/Slide';
import * as ColorPalette from '../../share/ColorPalette';

const getDescription = (step: number) => {
  switch (step) {
    case 0:
      return 'Primary Color - 原色';
    case 1:
      return 'Secondary Color - 2次色';
    case 2:
      return 'Tertialy Color - 3次色';
    default:
      return '';
  }
};

export const ColorPrincipal = () => {
  const { nextSlide, prevSlide } = usePresentation();
  const [step, setStep] = useState(0);
  const handleIncrementStep = () => {
    if (step < 5) {
      return setStep((c) => c + 1);
    }
    nextSlide();
  };
  const handleDecrementStep = () => {
    if (step > 0) {
      return setStep((c) => c - 1);
    }
    prevSlide();
  };

  useKey(['l', 'Enter'], handleIncrementStep);
  useKey(['h'], handleDecrementStep);

  const a = step >= 1 ? 'opacity-100' : 'opacity-0';
  const b = step >= 2 ? 'opacity-100' : 'opacity-0';

  return (
    <Slide slideTitle="Color Principle" animation="fadeIn" position="center" resetKeyEvent>
      <div className="relative flex items-center justify-center w-[500px] h-[500px]">
        <p
          className={`absolute text-2xl font-bold text-gray-700 transition-opacity duration-1000 ${
            step === 0 ? 'opacity-100' : 'opacity-0 hidden'
          } ${step > 0 && 'hidden'}`}
        >
          {getDescription(step)}
        </p>
        <p
          className={`absolute text-2xl font-bold text-gray-700 transition-opacity duration-1000 ${
            step === 1 ? 'opacity-100' : 'opacity-0'
          } ${step > 1 && 'hidden'}`}
        >
          {getDescription(step)}
        </p>
        <p
          className={`absolute text-2xl font-bold text-gray-700 transition-opacity duration-1000 ${
            step === 2 ? 'opacity-100' : 'opacity-0'
          } ${step > 2 && 'hidden'}`}
        >
          {getDescription(step)}
        </p>
        <div
          className={`absolute h-[2px] w-[364px] rotate-[90deg] bg-gray-500 transition duration-500 ${
            step >= 3 ? 'bg-opacity-100' : 'bg-opacity-0'
          }`}
        />
        <div
          className={`absolute h-[2px] w-[364px] rotate-[150deg] bg-gray-500 transition duration-500  ${
            step >= 3 ? 'bg-opacity-100' : 'bg-opacity-0'
          }`}
        />
        <div
          className={`absolute h-[2px] w-[364px] rotate-[30deg] bg-gray-500 transition duration-500  ${
            step >= 3 ? 'bg-opacity-100' : 'bg-opacity-0'
          }`}
        />
        <div
          className={`absolute h-[2px] w-[364px] rotate-[120deg] bg-gray-500 transition duration-500 ${
            step >= 4 ? 'bg-opacity-100' : 'bg-opacity-0'
          }`}
        />
        <div
          className={`absolute h-[2px] w-[364px] rotate-[0deg] bg-gray-500 transition duration-500 ${
            step >= 4 ? 'bg-opacity-100' : 'bg-opacity-0'
          }`}
        />
        <div
          className={`h-[2px] w-[364px] rotate-[60deg] bg-gray-500 transition duration-500 ${
            step >= 4 ? 'bg-opacity-100' : 'bg-opacity-0'
          }`}
        />
        <p
          className={`absolute bg-gray-500 text-white w-24 h-24 flex items-center justify-center rounded-full transition-opacity duration-1000 text-2xl font-bold ${
            step === 5 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          補色
        </p>
        {/** 原色 */}
        <ColorPalette.Yellow className="rotate-[0deg]" />
        <ColorPalette.Red className="rotate-[120deg]" />
        <ColorPalette.Blue className="rotate-[240deg]" />
        {/** 2次色 */}
        <ColorPalette.Orange className={`rotate-[60deg] ${a}`} />
        <ColorPalette.Violet className={`rotate-[180deg] ${a}`} />
        <ColorPalette.Green className={`rotate-[300deg] ${a}`} />
        {/** 3次色 */}
        <ColorPalette.YellowOrange className={`rotate-[30deg] ${b}`} />
        <ColorPalette.RedOrange className={`rotate-[90deg] ${b}`} />
        <ColorPalette.RedViolet className={`rotate-[150deg] ${b}`} />
        <ColorPalette.BlueViolet className={`rotate-[210deg] ${b}`} />
        <ColorPalette.BlueGreen className={`rotate-[270deg] ${b}`} />
        <ColorPalette.YellowGreen className={`rotate-[330deg] ${b}`} />
      </div>
    </Slide>
  );
};
