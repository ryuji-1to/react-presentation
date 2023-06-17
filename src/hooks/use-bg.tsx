import { atom, useRecoilState } from 'recoil';
export type BGType = 'Spring' | 'Summer' | 'Fall' | 'Winter' | 'Default';

function getBG(type: BGType) {
  switch (type) {
    case 'Spring':
      return 'bg-gradient-to-br via-pink-200 from-pink-300 to-green-300';
    case 'Summer':
      return 'bg-gradient-to-br via-yellow-200 from-sky-300 to-orange-300';
    case 'Fall':
      return 'bg-gradient-to-br via-red-200 from-orange-300 to-orange-200';
    case 'Winter':
      return 'bg-gradient-to-br via-blue-200 from-indigo-400 to-purple-100';
    case 'Default':
    default:
      return 'bg-gradient-to-br via-slate-200 from-indigo-200 to-indigo-200';
  }
}
export const bgState = atom<BGType>({
  key: 'bgType',
  default: 'Default'
});

// TODO: LocalStorageに保存する
export function useBg() {
  const [bgType, setBgType] = useRecoilState(bgState);

  const bg = getBG(bgType);

  return { bg, bgType, setBgType };
}
