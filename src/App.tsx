import { Presentation } from './components/presentation/Presentation';
import { Slide } from './components/template/Slide';
import MD from './slides/post.mdx';

const createSlide = (title: string, slide: React.ReactElement) => {
  return { title, slide };
};

export type Slide = {
  title: string;
  slide: React.ReactElement;
};

const slides: [Slide, ...Slide[]] = [createSlide('Example slide', <MD />)];

export default function App() {
  return <Presentation showClock slides={slides} />;
}
