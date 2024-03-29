import { useEffect, useState } from 'react';

export function Clock(props: { size?: 'sm' | 'lg' }) {
  const [time, setTime] = useState(() => Date.now());
  const now = new Date(time);
  const date =
    now.getHours().toString().padStart(2, '0') +
    ':' +
    now.getMinutes().toString().padStart(2, '0');

  useEffect(() => {
    const timeId = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <span
      className={`${
        props.size === 'sm'
          ? 'text-sm'
          : props.size === 'lg'
          ? 'text-lg'
          : 'text-md'
      } text-gray-600 font-bold font-mono`}>
      {date}
      <span className="ml-2">
        {now.getSeconds().toString().padStart(2, '0')}
      </span>
    </span>
  );
}
