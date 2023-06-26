import { useEffect } from 'react';

function callback(entries: IntersectionObserverEntry[], className: string) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(className);
    } else {
      entry.target.classList.remove(className);
    }
  });
}

export function useAnimation() {
  const fadeIn = () => {
    const fadeInAnimation = () => {
      const observer = new IntersectionObserver((entries) =>
        callback(entries, 'animate-fadeIn')
      );
      const target = document.querySelector('.fadeIn');
      if (!target) {
        return;
      }
      target.classList.add('opacity-0');
      observer.observe(target);
    };
    useEffect(() => {
      fadeInAnimation();
    }, []);
  };

  return { fadeIn };
}
