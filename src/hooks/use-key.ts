import { useCallback, useEffect, useRef } from 'react';

type Callback = (e: KeyboardEvent) => void;

export function useKey(keys: Array<KeyboardEvent['key']>, callback: Callback) {
  const callbackRef = useRef<Callback>(callback);
  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (keys.some((key) => e.key === key)) {
        callbackRef.current(e);
      }
    },
    [keys]
  );

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [callback, handleKeydown, keys]);
}
