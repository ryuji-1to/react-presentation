import { Slide } from '../template/Slide';

export function Example() {
  return (
    <Slide slideTitle="Example Title" prose>
      <ul className="list-decimal text-2xl">
        <li>Hello</li>
        <li>World</li>
      </ul>
    </Slide>
  );
}
