type Animation = 'fadeIn';

export type SlideArgs = {
  title: string;
  slide: React.ReactElement;
  animation: Animation;
};

export type Slides = [SlideArgs, ...SlideArgs[]];
