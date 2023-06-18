import { Slide } from '../template/Slide';

export function Example() {
  return (
    <Slide slideTitle="Example Title" prose animation="fadeIn">
      {(s) => (
        <div>
          <s.Text>This is text component!!!!!!</s.Text>
          <s.List itemList={['hello', 'world']} />
        </div>
      )}
    </Slide>
  );
}
