import { Presentation } from './components/presentation/Presentation';
import { useBg } from './hooks/use-bg';
import { usePresentation } from './hooks/use-presentation';

export default function App() {
  const { currentSlide } = usePresentation();

  return (
    <BackGround>
      <Presentation>{currentSlide}</Presentation>;
    </BackGround>
  );
}

function BackGround({ children }: { children: React.ReactNode }) {
  const { bg } = useBg();
  return <div className={`h-full ${bg}`}>{children}</div>;
}
