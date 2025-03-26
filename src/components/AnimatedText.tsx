
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  once?: boolean;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in' | 'scale-in';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  as: Component = 'div',
  delay = 0,
  once = true,
  animation = 'fade-in-up'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (elementRef.current) {
                elementRef.current.classList.add(`animate-${animation}`);
              }
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            if (elementRef.current) {
              elementRef.current.classList.remove(`animate-${animation}`);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, delay, once]);

  return (
    <Component
      ref={elementRef}
      className={cn('opacity-0', className)}
    >
      {text}
    </Component>
  );
};

export default AnimatedText;
