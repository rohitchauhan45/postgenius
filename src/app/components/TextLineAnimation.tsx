"use client";

import { useEffect, useState, useRef } from 'react';

interface TextLineAnimationProps {
  text: string;
  delay?: number;
  lineDelay?: number;
  className?: string;
  threshold?: number;
  splitBy?: 'lines' | 'words' | 'sentences';
}

export default function TextLineAnimation({ 
  text, 
  delay = 0, 
  lineDelay = 150,
  className = "",
  threshold = 0.1,
  splitBy = 'sentences'
}: TextLineAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  // Split text based on the splitBy parameter
  const splitText = (text: string) => {
    switch (splitBy) {
      case 'words':
        return text.split(' ').map(word => word + ' ');
      case 'sentences':
        return text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
      case 'lines':
      default:
        return text.split('\n').filter(line => line.trim().length > 0);
    }
  };

  const textLines = splitText(text);

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
      textLines.forEach((_, index) => {
        setTimeout(() => {
          setVisibleLines(prev => [...prev, index]);
        }, index * lineDelay);
      });
    }
  }, [isVisible, lineDelay, textLines.length]);

  return (
    <div
      ref={ref}
      className={className}
    >
      {isVisible && (
        <div>
          {textLines.map((line, index) => (
            <span
              key={index}
              className={`inline transform transition-all duration-700 ease-out ${
                visibleLines.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3'
              }`}
              style={{
                transitionDelay: `${index * lineDelay}ms`,
                // Use natural word spacing
                marginRight: splitBy === 'words' ? '0' : '0',
                verticalAlign: 'baseline',
                // For sentences, add space after each except the last
                marginBottom: splitBy === 'sentences' && index < textLines.length - 1 ? '0' : '0',
              }}
            >
              {line}
              {splitBy === 'sentences' && index < textLines.length - 1 && '. '}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
