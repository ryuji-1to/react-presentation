import { useEffect } from 'react';

export const useAnimation = () => {
  const fadeIn = () => {
    const slideInAnimation = () => {
      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          } else {
            entry.target.classList.remove('animate-fadeIn');
          }
        });
      };
      const observer = new IntersectionObserver(callback);
      const target = document.querySelector('.fadeIn');
      if (!target) {
        return;
      }
      target.classList.add('opacity-0');
      observer.observe(target);
    };
    useEffect(() => {
      slideInAnimation();
    }, []);
  };

  return { fadeIn };
};
