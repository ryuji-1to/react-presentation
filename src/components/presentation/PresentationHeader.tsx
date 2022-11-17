import { useClock } from '../../hooks/use-clock';

export const PresentationHeader = () => {
  const { Clock } = useClock();
  return (
    <header className={`flex items-center py-2 px-4 justify-end`}>
      <Clock size="sm" />
    </header>
  );
};
