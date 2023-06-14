import { Presentation } from './components/presentation/Presentation';
import { usePresentation } from './hooks/use-presentation';

export type BGType = 'spring' | 'summer' | 'fall' | 'winter' | 'default';

function getBG(type: BGType) {
  switch (type) {
    case 'spring':
      return '';
    case 'summer':
      return 'bg-gradient-to-br via-yellow-200 from-sky-300 to-orange-300';
    case 'fall':
      return '';
    case 'winter':
      return 'bg-gradient-to-br via-purple-200 from-blue-300 to-sky-300';
    case 'default':
    default:
      return 'bg-gradient-to-br via-slate-300 from-indigo-300 to-indigo-200';
  }
}

function BackGround({ children, type }: { children: React.ReactNode; type: BGType }) {
  const bg = getBG(type);
  return <div className={`h-full ${bg}`}>{children}</div>;
}

function App() {
  const { currentSlide, bg } = usePresentation();

  return (
    <BackGround type={bg}>
      <Presentation>{currentSlide}</Presentation>;
    </BackGround>
  );
}

export default App;
