"use client";

import { useEffect, useState } from 'react';

interface StaggeredAnimationProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}

export default function StaggeredAnimation({ 
  children, 
  staggerDelay = 100, 
  className = "" 
}: StaggeredAnimationProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      children.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, index * staggerDelay);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [children, staggerDelay]);

  return (
    <div className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transform transition-all duration-700 ease-out ${
            visibleItems.includes(index)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
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
