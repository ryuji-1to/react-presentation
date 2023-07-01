export type SlideArgs = {
  title: string;
  slide: React.ReactElement;
  animation: 'fadeIn';
};

export type Slides = [SlideArgs, ...SlideArgs[]];
