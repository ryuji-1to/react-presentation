import { BackGround } from './BackGround';
import { Presentation } from './components/presentation/Presentation';
import { Example } from './components/slides/Example';
import { Example2 } from './components/slides/Example2';

const createSlide = (title: string, slide: React.ReactElement) => {
  return { title, slide };
};

export type Slide = {
  title: string;
  slide: React.ReactElement;
};

const slides: [Slide, ...Slide[]] = [
  createSlide('Example Slide', <Example />),
  createSlide('Example Slide2', <Example2 />)
];

export default function App() {
  return <Presentation showClock slides={slides} />;
}
