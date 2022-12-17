import { Slide } from '../template/Slide';

export const TableOfContents = () => {
  return (
    <Slide slideTitle="アジェンダ" animation="fadeIn" prose>
      <ul className="list-decimal text-3xl text-gray-700">
        <li>TRPCとは</li>
        <li>デモ</li>
      </ul>
    </Slide>
  );
};
