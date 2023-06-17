import { BGType, useBg } from '../../hooks/use-bg';
import { Clock } from './Clock';

const bgList: BGType[] = ['Default', 'Spring', 'Summer', 'Fall', 'Winter'];

export function PresentationHeader() {
  return (
    <header className={`flex items-center py-2 px-4 justify-between`}>
      <BgSelect />
      <Clock size="sm" />
    </header>
  );
}

function BgSelect() {
  const { bgType, setBgType } = useBg();
  return (
    <select
      className="bg-transparent outline-none hover:cursor-pointer font-semibold text-gray-600"
      defaultValue={bgType}
      onChange={(e) => setBgType(e.target.value as BGType)}>
      {bgList.map((bg) => (
        <option key={bg} value={bg}>
          {bg}
        </option>
      ))}
    </select>
  );
}
