import { Presentation } from './components/Presentation';
import { useSlides } from './hooks/use-slides';

function App() {
  const { currentSlide } = useSlides();

  return <Presentation>{currentSlide}</Presentation>;
}

export default App;
