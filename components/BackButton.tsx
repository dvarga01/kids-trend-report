import Link from 'next/link';

export default function BackButton() {
  return (
    <Link
      href="/activities"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                 text-[var(--gray-700)] bg-white border border-[var(--gray-300)]
                 hover:bg-[var(--gray-50)] hover:border-[var(--gray-400)]
                 active:scale-95 transition-all"
    >
      <span>←</span>
      <span>Back to Activities</span>
    </Link>
  );
}
