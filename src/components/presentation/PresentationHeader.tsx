import { Clock } from './Clock';

export const PresentationHeader = () => {
  return (
    <header className={`flex items-center py-2 px-4 justify-end`}>
      <Clock size="sm" />
    </header>
  );
};
