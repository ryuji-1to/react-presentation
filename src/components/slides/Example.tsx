import { Slide } from '../template/Slide';

export const Example = () => {
  return (
    <Slide slideTitle="Example Title" prose>
      <ul className="list-decimal">
        <li>Hello</li>
        <li>World</li>
      </ul>
    </Slide>
  );
};
