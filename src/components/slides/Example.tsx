import { Slide } from '../template/Slide';

export function Example() {
  return (
    <Slide slideTitle="Example Title" prose>
      {(s) => <s.List itemList={['hello', 'world']} />}
    </Slide>
  );
}
