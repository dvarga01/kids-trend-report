'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  publishDate: string;
  nextEditionDays: number;
}

export default function CountdownTimer({ publishDate, nextEditionDays }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const published = new Date(publishDate);
      const nextEdition = new Date(published.getTime() + nextEditionDays * 24 * 60 * 60 * 1000);
      const now = new Date();
      const difference = nextEdition.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [publishDate, nextEditionDays]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--charcoal)] mb-8 text-center">
        Next report drops in...
      </h2>

      <div className="flex gap-4 md:gap-8">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-lg w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
            <span className="text-3xl md:text-5xl font-bold text-[var(--rust)]">
              {timeLeft.days}
            </span>
          </div>
          <span className="text-sm md:text-base text-[var(--dark-sage)] mt-2 font-medium">
            days
          </span>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-lg w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
            <span className="text-3xl md:text-5xl font-bold text-[var(--rust)]">
              {timeLeft.hours}
            </span>
          </div>
          <span className="text-sm md:text-base text-[var(--dark-sage)] mt-2 font-medium">
            hours
          </span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-lg w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
            <span className="text-3xl md:text-5xl font-bold text-[var(--rust)]">
              {timeLeft.minutes}
            </span>
          </div>
          <span className="text-sm md:text-base text-[var(--dark-sage)] mt-2 font-medium">
            min
          </span>
        </div>
      </div>

      <div className="mt-12 text-center max-w-md">
        <p className="text-[var(--dark-sage)] leading-relaxed">
          A new digest about digital trends affecting kids will be available soon.
        </p>
      </div>
    </div>
  );
}
