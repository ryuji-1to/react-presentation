import { Presentation } from './components/presentation/Presentation';
import MD from './slides/post.mdx';
import Center from './slides/center.mdx';
import TwoColumn from './slides/two-column.mdx';
import ListItem from './slides/list-item.mdx';
import type { Slides } from './types';

export type TSlide = {
  title: string;
  slide: React.ReactElement;
};

const slides: Slides = [
  { title: 'Example slide', slide: <MD />, animation: 'fadeIn' },
  {
    title: 'Center slide',
    slide: <Center />,
    animation: 'fadeIn'
  },
  {
    title: 'jsx slide',
    slide: <div>This is jsx</div>,
    animation: 'fadeIn'
  },
  {
    title: 'two column slide',
    slide: <TwoColumn />,
    animation: 'fadeIn'
  },
  {
    title: 'list item slide',
    slide: <ListItem />,
    animation: 'fadeIn'
  }
];

export default function App() {
  return <Presentation showClock slides={slides} />;
}
