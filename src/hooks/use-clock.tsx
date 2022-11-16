import { useEffect, useState } from 'react';

export const useClock = () => {
  const [time, setTime] = useState(Date.now());
  const now = new Date(time);
  const Clock = (props: { size?: 'sm' | 'lg' }) => {
    const date = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    return (
      <span
        className={`${props.size === 'sm' ? 'text-sm' : props.size === 'lg' ? 'text-lg' : 'text-md'} text-gray-300`}
      >
        <span className="inline-block w-10 text-center">{date}</span>
        <span className="inline-block w-6 text-center">{now.getSeconds().toString().padStart(2, '0')}</span>
      </span>
    );
  };

  useEffect(() => {
    const timeId = setTimeout(() => setTime(Date.now()), 1000);
    return () => clearTimeout(timeId);
  }, [time]);

  return {
    Clock
  };
};
