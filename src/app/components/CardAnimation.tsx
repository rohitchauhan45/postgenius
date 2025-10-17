"use client";

import { useEffect, useState, useRef } from 'react';

interface CardAnimationProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
  threshold?: number;
  delay?: number;
}

export default function CardAnimation({ 
  children, 
  staggerDelay = 200, 
  className = "",
  threshold = 0.1,
  delay = 0
}: CardAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
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
    if (isVisible) {
      children.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * staggerDelay);
      });
    }
  }, [isVisible, staggerDelay, children.length]);

  return (
    <div
      ref={ref}
      className={className}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className={`transform transition-all duration-700 ease-out ${
            visibleCards.includes(index)
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
