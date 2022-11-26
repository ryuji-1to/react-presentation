import { ReactNode, useState } from 'react';
import { useKey } from '../../hooks/use-key';
import { usePresentation } from '../../hooks/use-presentation';
import { Slide } from '../template/Slide';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const ListItem = (props: { children: ReactNode }) => {
  return (
    <li className="space-x-1">
      <AiOutlineCheckCircle className="inline-block text-green-500" />
      <span>{props.children}</span>
    </li>
  );
};

export const WhatIsUiUx = () => {
  const { nextSlide, prevSlide } = usePresentation();
  const [step, setStep] = useState(0);
  const handleIncrementStep = () => {
    if (step < 2) {
      return setStep((prev) => prev + 1);
    }
    nextSlide();
  };
  const handleDecrenmentStep = () => {
    if (step > 0) {
      return setStep((prev) => prev - 1);
    }
    prevSlide();
  };

  useKey(['l', 'Enter'], handleIncrementStep);
  useKey(['h'], handleDecrenmentStep);

  const headingStyle = 'mt-4 font-bold text-center text-4xl';
  const sectionStyle =
    'p-4 bg-white w-96 shadow-around rounded-xl bg-opacity-30 backdrop-blur-2xl transition-opacity duration-700';

  return (
    <Slide resetKeyEvent prose animation="fadeIn" position="center" className="space-y-14">
      <h1 className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg">
        What is UI/UX ?
      </h1>
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-12 md:flex-row">
        <section className={`${sectionStyle} ${step >= 1 ? 'opacity-100' : 'opacity-0'} `}>
          <h2 className={headingStyle}>UI</h2>
          <h3 className="text-lg font-semibold text-center text-gray-700">ユーザーとサービスとの接点</h3>
          <ul className="pl-0 font-bold">
            <ListItem>きれいな配色</ListItem>
            <ListItem>見やすいレイアウト</ListItem>
            <ListItem>クリックできるできないがわかる</ListItem>
            <ListItem>どのページからでもトップに戻れる</ListItem>
          </ul>
        </section>
        <section className={`${sectionStyle} ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className={headingStyle}>UX</h2>
          <h3 className="text-lg font-semibold text-center text-gray-700">ユーザーがサービスを利用して得る体験</h3>
          <ul className="pl-0 font-bold text-gray-800">
            <ListItem>会員登録の仕方が簡単・シンプル</ListItem>
            <ListItem>デザインがきれいなので使いたくなる</ListItem>
            <ListItem>クリック時の挙動が想像できる</ListItem>
            <ListItem>サクサク動く</ListItem>
          </ul>
        </section>
      </div>
    </Slide>
  );
};
