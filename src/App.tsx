import { Presentation } from './components/presentation/Presentation';
import { usePresentation } from './hooks/use-presentation';

function App() {
  const { currentSlide } = usePresentation();

  return <Presentation>{currentSlide}</Presentation>;
}

export default App;
