import { BGType } from '@/App';
import { usePresentation } from '../../hooks/use-presentation';
import { Clock } from './Clock';

const bgList: BGType[] = ['default', 'spring', 'summer', 'fall', 'winter'];

export function PresentationHeader() {
  const { bg, setBg } = usePresentation();

  return (
    <header className={`flex items-center py-2 px-4 justify-between`}>
      <select defaultValue={bg} onChange={(e) => setBg(e.target.value as BGType)}>
        {bgList.map((bg) => (
          <option key={bg} value={bg}>
            {bg}
          </option>
        ))}
      </select>
      <Clock size="sm" />
    </header>
  );
}
