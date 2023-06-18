import { useEffect } from 'react';

export function useClickOutside<T extends HTMLElement>(ref: React.RefObject<T>, callback: () => void) {
  console.log(ref.current);

  const handleClick = (e: MouseEvent) => {
    if (!ref.current || ref.current.contains(e.target as Node)) {
      return;
    }
    console.log(e.target, ref.current);
    callback();
  };
  useEffect(() => {
    window.addEventListener('mousedown', handleClick);
    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  });
}
