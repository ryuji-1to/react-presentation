import { useEffect } from 'react';

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void
) {
  const handleClick = (e: MouseEvent) => {
    if (!ref.current || ref.current.contains(e.target as Node)) {
      return;
    }
    callback();
  };
  useEffect(() => {
    window.addEventListener('mousedown', handleClick);
    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  });
}
