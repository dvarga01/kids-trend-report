'use client';

import { useState } from 'react';
import BackButton from './BackButton';

interface ConversationStartersProps {
  prompts: string[];
}

export default function ConversationStarters({ prompts }: ConversationStartersProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPrompt = prompts[currentIndex];

  const handleNext = () => {
    if (currentIndex < prompts.length - 1) {
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
          Conversation Starters
        </h2>
        <p className="text-sm text-[var(--gray-500)] text-center mt-2">
          Question {currentIndex + 1} of {prompts.length} • Take turns asking these questions
        </p>
      </div>

      {/* Main content - centered */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <div className="w-full max-w-2xl">
          {/* Current prompt card */}
          <div className="bg-[var(--gray-50)] rounded-xl border-2 border-[var(--accent)] p-8 md:p-12 mb-8">
            <p className="text-xl md:text-2xl text-[var(--gray-900)] text-center leading-relaxed">
              {currentPrompt}
            </p>
          </div>

          {/* All questions list (compact) */}
          <div className="space-y-2">
            <p className="text-xs text-[var(--gray-500)] uppercase tracking-wide mb-3 text-center">
              All Questions
            </p>
            {prompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-full text-left p-3 rounded-lg transition-all text-sm ${
                  index === currentIndex
                    ? 'bg-[var(--accent)]/10 border-2 border-[var(--accent)]'
                    : 'bg-white border-2 border-[var(--gray-200)] hover:border-[var(--gray-300)]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--gray-300)] text-white text-xs flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span className="text-[var(--gray-700)] line-clamp-2">
                    {prompt}
                  </span>
                </div>
              </button>
            ))}
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
          disabled={currentIndex === prompts.length - 1}
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
