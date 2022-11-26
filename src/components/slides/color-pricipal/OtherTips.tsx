import type { ReactNode } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Slide } from '../../template/Slide';

const ListItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="space-x-2 leading-relaxed">
      <AiOutlineCheckCircle className="inline-block text-green-500" />
      <span>{children}</span>
    </li>
  );
};

export const OtherTips = () => {
  return (
    <Slide prose position="center">
      <h1 className="text-gray-800 ml-2 font-bold">Tips</h1>
      <ul className="text-2xl p-0 font-semibold text-gray-700">
        <ListItem>サイズは 4px 単位で調整するときれいに決まる</ListItem>
        <ListItem>行間 (line-height) は 1.5 ~ 1.7 くらいが読みやすい</ListItem>
        <ListItem>適度に影をつける</ListItem>
        <ListItem>コントラストを意識する</ListItem>
        <ListItem>aaa</ListItem>
      </ul>
    </Slide>
  );
};
