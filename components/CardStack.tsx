'use client';

import { useState, useEffect } from 'react';
import DigestCard from './DigestCard';
import Link from 'next/link';

interface Card {
  id: number;
  title: string;
  content: string;
  whyItMatters: string;
  stat?: string | null;
}

interface CardStackProps {
  cards: Card[];
}

export default function CardStack({ cards }: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const currentCard = cards[currentIndex];
  const totalCards = cards.length;

  const goToNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle touch gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      goToNext();
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      goToPrevious();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* Card container - properly centered */}
      <div
        className="flex-1 flex items-center justify-center p-4 md:p-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full max-w-2xl h-full max-h-[600px]">
          <DigestCard
            {...currentCard}
            cardNumber={currentIndex + 1}
            totalCards={totalCards}
          />
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-center gap-6 py-4 px-4 bg-white border-t border-[var(--gray-200)]">
        {/* Previous button */}
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="w-10 h-10 rounded-full bg-[var(--gray-900)] text-white
                     disabled:opacity-20 disabled:cursor-not-allowed
                     hover:bg-[var(--gray-700)] active:scale-95 transition-all
                     flex items-center justify-center text-lg font-bold"
          aria-label="Previous card"
        >
          ←
        </button>

        {/* Progress dots */}
        <div className="flex gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[var(--accent)] w-6'
                  : 'bg-[var(--gray-300)] w-2 hover:bg-[var(--gray-400)]'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={goToNext}
          disabled={currentIndex === totalCards - 1}
          className="w-10 h-10 rounded-full bg-[var(--gray-900)] text-white
                     disabled:opacity-20 disabled:cursor-not-allowed
                     hover:bg-[var(--gray-700)] active:scale-95 transition-all
                     flex items-center justify-center text-lg font-bold"
          aria-label="Next card"
        >
          →
        </button>
      </div>

      {/* CTA to activities */}
      {currentIndex === totalCards - 1 && (
        <div className="py-6 px-4 bg-[var(--gray-100)] text-center border-t border-[var(--gray-200)]">
          <p className="text-base text-[var(--gray-700)] mb-3">
            Ready to start a conversation?
          </p>
          <Link
            href="/activities"
            className="inline-block px-6 py-2 rounded-lg font-medium text-white
                       bg-[var(--accent)] hover:bg-[var(--accent-hover)]
                       active:scale-95 transition-all"
          >
            Try This Week's Activities
          </Link>
        </div>
      )}
    </div>
  );
}
