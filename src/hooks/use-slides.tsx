import { useMemo } from 'react';
import type { ReactElement } from 'react';
import { SelfIntroduction } from '../components/slides/SelfIntroduction';
import { Title } from '../components/slides/Title';
import { LikeButtonDemo } from '../components/slides/ux-demo/LikeButtonDemo';
import { WhatIsUiUx } from '../components/slides/WhatIsUiUx';
import { UxDemoTitle } from '../components/slides/ux-demo/ux-demo-title';
import { TodoDemo } from '../components/slides/ux-demo/TodoDemo';
import { ColorPrincipal } from '../components/slides/color-pricipal/ColorPrincipal';
import { ColorPrincipalTitle } from '../components/slides/color-pricipal/color-pricipal-title';
import { ComplementaryColor } from '../components/slides/color-pricipal/ComplementaryColor';
import { FontTitle } from '../components/slides/font/font-title';
import { LineHeight } from '../components/slides/font/LineHeight';
import { AnalogousColorDescription } from '../components/slides/color-pricipal/AnalogousColorDescription';
import { EOF } from '../components/slides/EOF';
import { OtherTips } from '../components/slides/color-pricipal/OtherTips';
import { AnalogousColorExample } from '../components/slides/color-pricipal/AnalogousColorExample';
import { Contrast } from '../components/slides/font/Contrast';
import { ComponentsOfDesign } from '../components/slides/ComponentsOfDesign';

export const useSlides = () => {
  const createSlide = (slide: ReactElement) => {
    return {
      slide,
      // @ts-ignore
      text: slide.type.name
    };
  };

  const slides = useMemo(() => {
    return [
      <Title />,
      <SelfIntroduction />,
      <WhatIsUiUx />,
      <ComponentsOfDesign />,
      // Color Principal
      <ColorPrincipalTitle />,
      <ColorPrincipal />,
      <ComplementaryColor />,
      <AnalogousColorDescription />,
      <AnalogousColorExample />,
      // Font
      <FontTitle />,
      <LineHeight />,
      <Contrast />,
      <OtherTips />,
      // UX Demo
      <UxDemoTitle />,
      <LikeButtonDemo />,
      <TodoDemo />,
      <EOF />
    ];
  }, []);
  return { slides: slides.map((slide) => createSlide(slide)) };
};
