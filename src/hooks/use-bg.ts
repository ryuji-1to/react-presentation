import { atom, useRecoilState } from 'recoil';
export type BGType = typeof bgList[number];

const bgJSON: Record<BGType, string> = {
  Default: 'bg-gradient-to-br via-slate-200 from-indigo-200 to-indigo-200',
  Red: 'bg-gradient-to-br via-red-300 from-rose-400 to-pink-300',
  Sky: 'bg-gradient-to-br via-blue-200 from-cyan-400 to-sky-300',
  Spring: 'bg-gradient-to-br via-pink-200 from-pink-300 to-green-300',
  Summer: 'bg-gradient-to-br via-yellow-200 from-sky-300 to-orange-300',
  Fall: 'bg-gradient-to-br via-red-200 from-orange-300 to-orange-200',
  Winter: 'bg-gradient-to-br via-blue-200 from-indigo-400 to-purple-100',
  Tomato: 'bg-gradient-to-b via-red-500 from-green-500 to-red-400',
  'Orange Sky': 'bg-gradient-to-br via-white from-[#a7ccee] to-[#d68148]',
  Lemon: 'bg-gradient-to-br via-[#fcf484] from-green-400 to-[#fcf484]',
  Marigold: 'bg-gradient-to-br via-[#cf6a40] from-[#ecc356] to-[#ecc356]',
  Cherry: 'bg-gradient-to-br from-[#cd5a5e] via-pink-300 to-[#e3b0cc]',
  'Indigo Night': 'bg-gradient-to-b from-[#384c7c] via-[#384c7c] to-[#d16a37]'
};

export const bgList = [
  'Default',
  'Spring',
  'Summer',
  'Fall',
  'Winter',
  'Sky',
  'Red',
  'Tomato',
  'Orange Sky',
  'Lemon',
  'Marigold',
  'Cherry',
  'Indigo Night'
] as const satisfies readonly string[];

const LOCAL_STORAGE_KEY = 'slide-bg-theme';

function getLocal(): BGType {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!value) {
    return 'Default';
  }
  return value as BGType;
}

function setLocal(value: BGType) {
  localStorage.setItem(LOCAL_STORAGE_KEY, value);
}
export const bgState = atom<BGType>({
  key: 'bgType',
  default: getLocal()
});

export function useBg() {
  const [bgType, setBg] = useRecoilState(bgState);

  const bg = bgJSON[bgType];
  const setBgType = (value: BGType) => {
    setBg(value);
    setLocal(value);
  };

  return { bg, bgType, setBgType };
}
