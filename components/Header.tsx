'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isActivitiesPage = pathname.startsWith('/activities');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--gray-200)] h-16">
      <div className="h-full max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-lg md:text-xl font-bold text-[var(--gray-900)] hover:text-[var(--accent)] transition-colors"
        >
          Kid's Trend Report
        </Link>

        <Link
          href={isActivitiesPage ? '/' : '/activities'}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all
                     bg-[var(--gray-900)] text-white hover:bg-[var(--gray-700)]
                     active:scale-95"
        >
          {isActivitiesPage ? 'View Report' : 'Activities'}
        </Link>
      </div>
    </header>
  );
}
