import { BgSelect } from './BgSelect';
import { Clock } from './Clock';

type Props = {
  showClock: boolean;
};
export function PresentationHeader({ showClock }: Props) {
  return (
    <header className={`flex space-x-4 items-center py-2 px-4 justify-end`}>
      {showClock && <Clock />}
      <BgSelect />
    </header>
  );
}
