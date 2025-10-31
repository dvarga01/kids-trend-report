'use client';

import { useState, useEffect, useRef } from 'react';
import BackButton from './BackButton';

interface DiscussionTimerProps {
  duration: number; // in seconds
  prompts: string[];
  instructions: string;
}

export default function DiscussionTimer({ duration, prompts, instructions }: DiscussionTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsFinished(true);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    setIsRunning(true);
    setIsFinished(false);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(duration);
    setIsFinished(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((duration - timeLeft) / duration) * 100;

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Back button and header */}
      <div className="border-b border-[var(--gray-200)] p-4">
        <BackButton />
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--gray-900)] mt-4 text-center">
          10-Minute Deep Dive
        </h2>
        <p className="text-sm text-[var(--gray-500)] text-center mt-2 max-w-2xl mx-auto">
          {instructions}
        </p>
      </div>

      {/* Main content - centered */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto">
        {/* Timer display */}
        <div className="mb-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="var(--gray-200)"
                strokeWidth="8"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="var(--accent)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * (0.45 * 96)}`}
                strokeDashoffset={`${2 * Math.PI * (0.45 * 96) * (1 - progress / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>

            {/* Time display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-bold text-[var(--gray-900)]">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>

        {/* Finished message */}
        {isFinished && (
          <div className="mb-6 p-4 bg-[var(--accent)]/10 rounded-lg border-2 border-[var(--accent)]">
            <p className="text-lg font-bold text-[var(--accent)] text-center">
              Time's up! Great conversation!
            </p>
          </div>
        )}

        {/* Control buttons */}
        <div className="flex gap-3 mb-8">
          {!isRunning && timeLeft === duration && (
            <button
              onClick={handleStart}
              className="px-6 py-3 rounded-lg font-medium
                         bg-[var(--accent)] text-white
                         hover:bg-[var(--accent-hover)] active:scale-95 transition-all"
            >
              Start Timer
            </button>
          )}

          {isRunning && (
            <button
              onClick={handlePause}
              className="px-6 py-3 rounded-lg font-medium
                         bg-[var(--gray-900)] text-white
                         hover:bg-[var(--gray-700)] active:scale-95 transition-all"
            >
              Pause
            </button>
          )}

          {!isRunning && timeLeft < duration && (
            <>
              <button
                onClick={handleStart}
                className="px-6 py-3 rounded-lg font-medium
                           bg-[var(--accent)] text-white
                           hover:bg-[var(--accent-hover)] active:scale-95 transition-all"
              >
                Resume
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-lg font-medium
                           bg-white text-[var(--gray-900)]
                           border-2 border-[var(--gray-300)] hover:bg-[var(--gray-50)]
                           active:scale-95 transition-all"
              >
                Reset
              </button>
            </>
          )}
        </div>

        {/* Conversation prompts */}
        <div className="w-full max-w-xl">
          <h3 className="text-sm font-bold text-[var(--gray-500)] uppercase tracking-wide mb-3 text-center">
            Conversation Prompts
          </h3>
          <div className="space-y-2">
            {prompts.map((prompt, index) => (
              <div
                key={index}
                className="bg-[var(--gray-50)] rounded-lg p-3 border border-[var(--gray-200)]"
              >
                <p className="text-sm text-[var(--gray-700)]">
                  {prompt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
