'use client';

import { useState } from 'react';
import BackButton from './BackButton';

interface Prompt {
  optionA: string;
  optionB: string;
}

interface WouldYouRatherProps {
  prompts: Prompt[];
}

export default function WouldYouRather({ prompts }: WouldYouRatherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPrompt = prompts[currentIndex];
  const isLastPrompt = currentIndex === prompts.length - 1;

  const handleNext = () => {
    if (!isLastPrompt) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Back button and header */}
      <div className="border-b border-[var(--gray-200)] p-4">
        <BackButton />
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--gray-900)] mt-4 text-center">
          Would You Rather...
        </h2>
        <p className="text-sm text-[var(--gray-500)] text-center mt-2">
          Question {currentIndex + 1} of {prompts.length}
        </p>
      </div>

      {/* Main content - centered */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <div className="w-full max-w-3xl space-y-6">
          {/* Option A */}
          <div className="bg-[var(--gray-50)] rounded-xl border-2 border-[var(--gray-300)] p-6 md:p-8
                         hover:border-[var(--accent)] transition-all">
            <p className="text-lg md:text-2xl text-[var(--gray-900)] text-center leading-relaxed">
              {currentPrompt.optionA}
            </p>
          </div>

          {/* OR divider */}
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-[var(--gray-900)] text-white text-sm md:text-base font-bold rounded-full">
              OR
            </span>
          </div>

          {/* Option B */}
          <div className="bg-[var(--gray-50)] rounded-xl border-2 border-[var(--gray-300)] p-6 md:p-8
                         hover:border-[var(--accent)] transition-all">
            <p className="text-lg md:text-2xl text-[var(--gray-900)] text-center leading-relaxed">
              {currentPrompt.optionB}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-[var(--gray-200)] py-4 px-4 flex items-center justify-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="px-4 py-2 rounded-lg text-sm font-medium
                     bg-[var(--gray-900)] text-white
                     disabled:opacity-20 disabled:cursor-not-allowed
                     hover:bg-[var(--gray-700)] active:scale-95 transition-all"
        >
          ← Previous
        </button>

        <div className="flex gap-2">
          {prompts.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[var(--accent)] w-6'
                  : 'bg-[var(--gray-300)] w-2'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={isLastPrompt}
          className="px-4 py-2 rounded-lg text-sm font-medium
                     bg-[var(--gray-900)] text-white
                     disabled:opacity-20 disabled:cursor-not-allowed
                     hover:bg-[var(--gray-700)] active:scale-95 transition-all"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
