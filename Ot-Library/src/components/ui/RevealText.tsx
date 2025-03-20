
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  as?: React.ElementType;
}

export const RevealText = ({
  children,
  delay = 0,
  className,
  threshold = 0.1,
  once = true,
  as: Component = 'div',
}: RevealTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, once]);

  return (
    <Component 
      ref={ref} 
      className={cn(
        'text-reveal', 
        isRevealed && 'revealed', 
        className
      )}
    >
      {typeof children === 'string' ? (
        <span style={{ transitionDelay: `${delay}ms` }}>{children}</span>
      ) : (
        children
      )}
    </Component>
  );
};

export default RevealText;
