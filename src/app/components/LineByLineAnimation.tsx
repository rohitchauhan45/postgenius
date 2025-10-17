"use client";

import { useEffect, useState, useRef } from 'react';

interface LineByLineAnimationProps {
  children: React.ReactNode;
  delay?: number;
  lineDelay?: number;
  className?: string;
  threshold?: number;
}

export default function LineByLineAnimation({ 
  children, 
  delay = 0, 
  lineDelay = 100,
  className = "",
  threshold = 0.1 
}: LineByLineAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  useEffect(() => {
    if (isVisible && ref.current) {
      const lines = ref.current.querySelectorAll('.line-animate');
      lines.forEach((_, index) => {
        setTimeout(() => {
          setVisibleLines(prev => [...prev, index]);
        }, index * lineDelay);
      });
    }
  }, [isVisible, lineDelay]);

  return (
    <div
      ref={ref}
      className={className}
    >
      {isVisible && (
        <div>
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <div
                key={index}
                className={`line-animate transform transition-all duration-700 ease-out ${
                  visibleLines.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${index * lineDelay}ms`,
                }}
              >
                {child}
              </div>
            ))
          ) : (
            <div
              className={`line-animate transform transition-all duration-700 ease-out ${
                visibleLines.includes(0)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {children}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
