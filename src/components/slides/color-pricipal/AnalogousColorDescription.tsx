import { Slide } from '../../template/Slide';
import * as ColorPalette from '../../share/ColorPalette';

export const AnalogousColorDescription = () => {
  return (
    <Slide position="center">
      <div className="relative flex items-center justify-center w-[500px] h-[500px]">
        {/** 原色 */}
        <ColorPalette.Yellow className="rotate-[0deg]" />
        <ColorPalette.Red className="rotate-[120deg]" />
        <ColorPalette.Blue className="rotate-[240deg]" />
        {/** 2次色 */}
        <ColorPalette.Orange className={`rotate-[60deg]`} />
        <ColorPalette.Violet className={`rotate-[180deg]`} />
        <ColorPalette.Green className={`rotate-[300deg]`} />
        {/** 3次色 */}
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
