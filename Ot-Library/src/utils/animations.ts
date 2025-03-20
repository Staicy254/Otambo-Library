
import { useEffect, useRef, useState } from 'react';

// Hook to reveal elements when they enter the viewport
export const useInView = (options = {}, once = true) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once && currentRef) {
          observer.unobserve(currentRef);
        }
      } else if (!once) {
        setIsInView(false);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, once]);

  return { ref, isInView };
};

// Hook to create a staggered animation effect for children
export const useStaggeredChildren = (staggerDelay = 0.1, baseDelay = 0) => {
  return (index: number) => ({
    transition: {
      delay: baseDelay + index * staggerDelay,
    }
  });
};

// Hook to track scroll progress
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollProgress;
};
