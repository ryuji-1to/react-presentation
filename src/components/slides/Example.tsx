import { Slide } from '../template/Slide';

export function Example() {
  return (
    <Slide slideTitle="Example Title" animation="fadeIn">
      {(s) => (
        <div>
          <s.Text size="xl">This is text component!!!!!!</s.Text>
          <s.List className="list-decimal marker:text-gray-500" itemList={['hello', 'world']} />
        </div>
      )}
    </Slide>
  );
}
