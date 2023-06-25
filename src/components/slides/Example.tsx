import { Slide } from '../template/Slide';

export function Example() {
  return (
    <Slide slideTitle="Example Title" animation="fadeIn">
      {(s) => (
        <div>
          <s.Text size="xl">This is text component!!!!!!</s.Text>
          <s.List className="list-decimal" itemList={['hello', 'world']} />
        </div>
      )}
    </Slide>
  );
}
