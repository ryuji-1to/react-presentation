import { Slide } from '../template/Slide';
import * as ColorPalette from '../share/ColorPalette';

export const ColorPrincipal = () => {
  return (
    <Slide slideTitle="Color Principle" animation="fadeIn" position="center" resetKeyEvent>
      <div className="relative flex items-center justify-center w-[500px] h-[500px]">
        <div
          className={`absolute h-[2px] w-[364px] rotate-[90deg] bg-gray-500 transition duration-500 
          `}
        />
        <div
          className={`absolute h-[2px] w-[364px] rotate-[150deg] bg-gray-500 transition duration-500  
          `}
        />
        <div
          className={`absolute h-[2px] w-[364px] rotate-[30deg] bg-gray-500 transition duration-500  
          `}
        />
        <div
          className={`absolute h-[2px] w-[364px] rotate-[120deg] bg-gray-500 transition duration-500 
          `}
        />
        <div
          className={`absolute h-[2px] w-[364px] rotate-[0deg] bg-gray-500 transition duration-500 
          `}
        />
        <div
          className={`h-[2px] w-[364px] rotate-[60deg] bg-gray-500 transition duration-500 
          `}
        />
        <ColorPalette.Yellow className="rotate-[0deg]" />
        <ColorPalette.Red className="rotate-[120deg]" />
        <ColorPalette.Blue className="rotate-[240deg]" />
        <ColorPalette.Orange className={`rotate-[60deg]`} />
        <ColorPalette.Violet className={`rotate-[180deg]`} />
        <ColorPalette.Green className={`rotate-[300deg]`} />
        <ColorPalette.YellowOrange className={`rotate-[30deg]`} />
        <ColorPalette.RedOrange className={`rotate-[90deg]`} />
        <ColorPalette.RedViolet className={`rotate-[150deg]`} />
        <ColorPalette.BlueViolet className={`rotate-[210deg]`} />
        <ColorPalette.BlueGreen className={`rotate-[270deg]`} />
        <ColorPalette.YellowGreen className={`rotate-[330deg]`} />
      </div>
    </Slide>
  );
};
