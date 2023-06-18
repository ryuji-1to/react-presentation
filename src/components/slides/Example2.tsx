import { Slide } from '../template/Slide';

export function Example2() {
  return (
    <Slide slideTitle="Example2" prose animation="fadeIn">
      {({ Text }) => <Text>hello world</Text>}
    </Slide>
  );
}
