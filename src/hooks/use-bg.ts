import { atom, useRecoilState } from 'recoil';
export type BGType = typeof bgList[number];

export const bgList = ['Default', 'Spring', 'Summer', 'Fall', 'Winter'] as const;

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

function getLocal(): BGType {
  const value = localStorage.getItem('slide-bg-theme');
  if (!value) {
    return 'Default';
  }
  return value as BGType;
}

function setLocal(value: BGType) {
  localStorage.setItem('slide-bg-theme', value);
}
export const bgState = atom<BGType>({
  key: 'bgType',
  default: getLocal()
});

export function useBg() {
  const [bgType, setBg] = useRecoilState(bgState);

  const bg = getBG(bgType);
  const setBgType = (value: BGType) => {
    setBg(value);
    setLocal(value);
  };

  return { bg, bgType, setBgType };
}
